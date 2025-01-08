import React from 'react';
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { CITY_SUGGESTIONS } from '@/constants/CitySuggestions';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

interface SearchBarProps {
  location: string;
  isDropdownVisible: boolean;
  isValidCity: boolean;
  onInputChange: (value: string) => void;
  onSuggestionClick: (city: string) => void;
  onSearch: () => void;
  onGeoSearch: () => void;
}

export const SearchBar = ({
  location,
  isDropdownVisible,
  isValidCity,
  onInputChange,
  onSuggestionClick,
  onSearch,
  onGeoSearch,
}: SearchBarProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        borderRadius: '10px',
        padding: '8px',
      }}
    >
      <Box sx={{ position: 'relative', flex: 1 }}>
        <TextField
          variant='outlined'
          placeholder='Enter location'
          value={location}
          onChange={(e) => onInputChange(e.target.value)}
          fullWidth
          size='small'
          error={!isValidCity}
          helperText={!isValidCity ? 'Invalid city' : ''}
          sx={{
            input: {
              color: 'white',
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '4px',
          }}
        />
        {isDropdownVisible && (
          <List
            sx={{
              position: 'absolute',
              top: '40px',
              left: 0,
              right: 0,
              maxHeight: '150px',
              overflowY: 'auto',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid #ccc',
              borderRadius: '4px',
              zIndex: 10,
            }}
          >
            {CITY_SUGGESTIONS.filter((city) =>
              city.toLowerCase().includes(location.toLowerCase()),
            ).map((city) => (
              <ListItem key={city} onClick={() => onSuggestionClick(city)}>
                <ListItemText primary={city} />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
      <Button
        variant='contained'
        onClick={onSearch}
        disabled={!isValidCity || !location}
        sx={{ height: '40px' }}
      >
        Search
      </Button>
      <IconButton onClick={onGeoSearch}>
        <LocationSearchingIcon />
      </IconButton>
    </Box>
  );
};
