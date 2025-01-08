import React from 'react';
import { Typography } from '@mui/material';

export const ErrorMessage = () => {
  return (
    <Typography color='error' sx={{ marginTop: 2 }}>
      Error fetching data
    </Typography>
  );
};
