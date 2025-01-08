'use server';

const API_KEY = process.env.OPEN_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(location: string) {
  const url = `${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
}

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export async function onGeoOk(position: Position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
}