import React from 'react';
import { Box, Typography } from '@mui/material';

export interface WeatherData {
  name: string;
  weather: {
    description: string;
    icon: string;
    main: string;
  }[];
  main: {
    temp: number;
  };
}

export const WeatherResult = ({ data }: { data: WeatherData }) => {
  return (
    <Box
      sx={{
        marginTop: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '10px',
        padding: '16px',
        color: 'white',
      }}
    >
      <Typography variant='h5'>{data.name}</Typography>
      <Typography>{data.weather[0].description}</Typography>
      <Typography>{data.weather[0].main}</Typography>
      <Typography>{data.main.temp}°C</Typography>
    </Box>
  );
};
