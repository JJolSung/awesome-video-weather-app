import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export const LoadingSpinner = () => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <CircularProgress />
    </Box>
  );
};
