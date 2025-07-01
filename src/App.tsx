// src/App.tsx

import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import IndicadorUI from './components/IndicadorUI';
import GraficoUI from './components/GraficoUI';
import TablaUI from './components/TablaUI';
import InfoAdicionalUI from './components/InfoAdicionalUI';
import { useState, useEffect } from 'react';
import { fetchWeatherData } from './services/fetchWeather';

function App() {
  
const [city, setCity] = useState('guayaquil'); // valor por defecto
const cityCoords: Record<string, { lat: number; lon: number }> = {
  guayaquil: { lat: -2.17, lon: -79.92 },
  quito: { lat: -0.18, lon: -78.47 },
  manta: { lat: -0.96, lon: -80.71 },
  cuenca: { lat: -2.90, lon: -79.00 },
};
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<any | null>(null);

  useEffect(() => {
    const coords = cityCoords[city];
    const timezone = 'America/Guayaquil'; // o ajustar según ciudad
    
    fetchWeatherData(coords.lat, coords.lon, timezone)
  .then(data => {
    setWeatherData(data);
    setLoading(false); // ✅ Detener carga al recibir datos
  })
  .catch(error => {
    console.error('Error al obtener clima:', error);
    setLoading(false);
  })}, [city]);

  const temperaturaActual = weatherData?.current_weather?.temperature;
  const humedadActual = weatherData?.hourly?.relativehumidity_2m?.[0];
  const uvMaxHoy = weatherData?.daily?.uv_index_max?.[0];


  const hourlyData = weatherData?.hourly?.time?.map((time: string, i: number) => ({
    time: time.split('T')[1].slice(0, 5),
    temperature: weatherData.hourly.temperature_2m[i],
  }));

  const dailyData = weatherData?.daily?.time?.map((date: string, i: number) => ({
    date,
    maxTemp: weatherData.daily.temperature_2m_max[i],
    minTemp: weatherData.daily.temperature_2m_min[i],
  }));

  
  return (
    <Grid container spacing={5} maxWidth="lg" sx={{ py: 4 }} justifyContent="center" alignItems="center">
      {/* Encabezado */}
      <Grid item xs={12} md={12} lg={12} container justifyContent="center" alignItems="center">
        <HeaderUI />
      </Grid>

      {/* Alertas */}
      <Grid item xs={12} container justifyContent="flex-end" alignItems="center">
        <AlertUI description="No se preveen lluvias" />
      </Grid>

      {/* Selector */}
      <Grid item xs={12} md={3}>
        <SelectorUI onCityChange={setCity} />
      </Grid>

      {/* Indicadores */}
      <Grid item xs={12} md={9} container spacing={2}>
        <Grid item xs={12} sm={4}>
          <IndicadorUI title="Temperatura" value={temperaturaActual ?? '--'} unit="°C" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <IndicadorUI title="Humedad" value={humedadActual ?? '--'} unit="%" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <IndicadorUI title="Índice UV" value={uvMaxHoy ?? '--'} />
        </Grid>
      </Grid>
      
      {/* Gráfico */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: 'none', md: 'block' }, // ocultar en pantallas pequeñas
        }}
      >
        <GraficoUI data={hourlyData || []}  />
      </Grid>

      {/* Tabla */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: 'none', md: 'block' }, // oculta en pantallas pequeñas
        }}
      >
        <TablaUI data={dailyData || []} />
      </Grid>

      {/* Información adicional */}
      <Grid item xs={12}>
        <InfoAdicionalUI message="Datos proporcionados por Open-Meteo. Actualización cada 3 horas." />
      </Grid>
    </Grid>
  );
}

export default App;
