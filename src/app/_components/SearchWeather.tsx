// src/app/_components/SearchWeather.tsx
'use client';

import { useEffect, useState } from 'react';
import { fetchWeather, onGeoOk } from '@/lib/fetchWeather';
import { CITY_SUGGESTIONS } from '@/constants/CitySuggestions';
import { SearchBar } from './SearchBar';
import { WeatherData, WeatherResult } from './WeatherResult';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { Box } from '@mui/material';
import { WEATHER_BACKGROUNDS } from '@/constants/WeatherBackgrounds';

export default function SearchWeather({
  setVideoSrc,
}: {
  setVideoSrc: (src: string) => void;
}) {
  const [location, setLocation] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isValidCity, setIsValidCity] = useState(true);

  // "weatherData" is the final weather data
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  // "isLoading" and "error" are separate states for loading and error
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // "onGeoError" is the function for handling the error when getting location
  const onGeoError = () => {
    alert("Can't find you. No weather for you.");
  };

  // Update the background video when the weather data changes
  useEffect(() => {
    if (!weatherData) {
      setVideoSrc('/assets/videos/Clear.mp4');
      return;
    }

    const weatherCondition = weatherData.weather[0].main;
    const videoSrc =
      WEATHER_BACKGROUNDS[
        weatherCondition as keyof typeof WEATHER_BACKGROUNDS
      ] || '/assets/videos/Clear.mp4';
    setVideoSrc(videoSrc);
  }, [weatherData, setVideoSrc]);

  // when the user clicks the search button
  const handleSearch = async () => {
    if (!location) return;
    try {
      setIsLoading(true);
      setError(null);

      const data = await fetchWeather(location);
      setWeatherData(data);
    } catch (err) {
      console.error(err);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  // when the user clicks the geo search button
  const handleGeoSearch = () => {
    if (!navigator.geolocation) {
      alert("Can't find you. No weather for you.");
      return;
    }

    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        // GeolocationPosition에서 필요한 데이터만 추출
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        // 추출된 데이터를 서버 함수에 전달
        const data = await onGeoOk(coords);
        setWeatherData(data);
      } catch (err) {
        console.error(err);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }, onGeoError);
  };

  // when the user changes the input
  const handleInputChange = (value: string) => {
    setLocation(value);
    setIsValidCity(CITY_SUGGESTIONS.includes(value));
    setIsDropdownVisible(value !== '');
  };

  // when the user clicks the city suggestion
  const handleSuggestionClick = (city: string) => {
    setLocation(city);
    setIsDropdownVisible(false);
    setIsValidCity(true);
  };

  // rendering
  return (
    <div
      style={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SearchBar
          location={location}
          isDropdownVisible={isDropdownVisible}
          isValidCity={isValidCity}
          onInputChange={handleInputChange}
          onSuggestionClick={handleSuggestionClick}
          onSearch={handleSearch}
          onGeoSearch={handleGeoSearch}
        />
      </Box>

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage />}

      {weatherData && <WeatherResult data={weatherData} />}
    </div>
  );
}
