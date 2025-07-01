// src/services/fetchWeather.ts

export async function fetchWeatherData(latitude: number, longitude: number, timezone: string) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m&daily=temperature_2m_max,temperature_2m_min,uv_index_max&current_weather=true&timezone=${timezone}`;
  
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
