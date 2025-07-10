
import { Grid } from '@mui/material';
import TableUI from './components/TableUI';
import ChartUI from './components/ChartUI';
import IndicatorUI from './components/IndicatorUI';
import SelectorUI from './components/SelectorUI';
import DataFetcher from './functions/DataFetcher';
import { useState } from 'react';

import './App.css'


function App() {
  const [city, setCity] = useState('');
  const dataFetcherOutput = DataFetcher(city);

  return (
    <Grid container spacing={5} justifyContent="center" alignItems="center">

      {/* Encabezado */}
      <Grid size={{ xs: 12, md: 12 }}>Elemento: Encabezado</Grid>

      {/* Alertas */}
      <Grid size={{ xs: 12, md: 12 }}>Elemento: Alertas</Grid>

      {/* Selector */}
      <Grid size={{ xs: 12, md: 3 }}><SelectorUI callback={(city) => setCity(city)}></SelectorUI></Grid>
 
      {/* Indicadores */}
      <Grid container size={{ xs: 12, md: 9 }} >

         {/* Renderizado condicional de los datos obtenidos */}
                 {city && dataFetcherOutput.loading && <p>Cargando datos...</p>}
                 {city && dataFetcherOutput.error && <p>Error: {dataFetcherOutput.error}</p>}
                 {dataFetcherOutput.data && (
                 <>

                     {/* Indicadores con datos obtenidos */}

                     <Grid size={{ xs: 12, md: 3 }} >
                         <IndicatorUI
                             title='Temperatura (2m)'
                             description={dataFetcherOutput.data.current.temperature_2m + " " + dataFetcherOutput.data.current_units.temperature_2m} />
                     </Grid>

                     <Grid size={{ xs: 12, md: 3 }}>
                         <IndicatorUI
                             title='Temperatura aparente'
                             description={dataFetcherOutput.data.current.apparent_temperature + " " + dataFetcherOutput.data.current_units.apparent_temperature} />
                     </Grid>

                     <Grid size={{ xs: 12, md: 3 }}>
                         <IndicatorUI
                             title='Velocidad del viento'
                             description={dataFetcherOutput.data.current.wind_speed_10m + " " + dataFetcherOutput.data.current_units.wind_speed_10m} />
                     </Grid>

                     <Grid size={{ xs: 12, md: 3 }}>
                         <IndicatorUI
                             title='Humedad relativa'
                             description={dataFetcherOutput.data.current.relative_humidity_2m + " " + dataFetcherOutput.data.current_units.relative_humidity_2m} />
                     </Grid>

                 </>
                 )}

      </Grid>

      {/* Gráfico */}
      <Grid size={{ xs: 6, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
        {city && dataFetcherOutput.loading && <p>Cargando datos...</p>}
        {city && dataFetcherOutput.error && <p>Error: {dataFetcherOutput.error}</p>}
        {dataFetcherOutput.data && (
          <ChartUI 
          title='Gráfico Tiempo vs Temperatura y Velocidad del Viento'
          label1={'Temperatura (2m)'+ " " + dataFetcherOutput.data.hourly_units.temperature_2m}
          label2={'Velocidad del viento (10m)'+ " " + dataFetcherOutput.data.hourly_units.wind_speed_10m}
          arrValues1={dataFetcherOutput.data?.hourly.temperature_2m}
          arrValues2={dataFetcherOutput.data?.hourly.wind_speed_10m}
          arrLabels={dataFetcherOutput.data?.hourly.time}/>
        )}
      </Grid>

      {/* Tabla */}
      <Grid size={{ xs: 6, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
        {city && dataFetcherOutput.loading && <p>Cargando datos...</p>}
        {city && dataFetcherOutput.error && <p>Error: {dataFetcherOutput.error}</p>}
        {dataFetcherOutput.data && (<TableUI 
        label0={'Tiempo' + " " + dataFetcherOutput.data.hourly_units.time}
        label1={'Temperatura (2m)' + " " + dataFetcherOutput.data.hourly_units.temperature_2m }
        label2={'Velocidad del viento (10m)' + " " + dataFetcherOutput.data.hourly_units.wind_speed_10m}
        arrValues1={dataFetcherOutput.data?.hourly.temperature_2m}
          arrValues2={dataFetcherOutput.data?.hourly.wind_speed_10m}
          arrLabels={dataFetcherOutput.data?.hourly.time}/>)}
      </Grid>

      {/* Información adicional */}
      <Grid size={{ display: { xs: "none", md: "block" } }}>Elemento: Información adicional</Grid>

    </Grid>
  )
}

export default App
