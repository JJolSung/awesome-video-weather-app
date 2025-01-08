import SearchWeather from '@/app/_components/SearchWeather';
import { Box, Container, Typography } from '@mui/material';

export default function ParentViewComponent({
  setVideoSrc,
}: {
  setVideoSrc: (src: string) => void;
}) {
  return (
    <Container sx={styles.container}>
      <Typography
        variant='h1'
        padding={1}
        borderRadius={1}
        sx={styles.title_h1}
      >
        Weather Awsome App
      </Typography>
      <Typography
        variant='h2'
        padding={1}
        borderRadius={1}
        sx={styles.title_h2}
      >
        Get the current weather of any city!
      </Typography>
      <Box sx={{ mt: 4 }}>
        <SearchWeather setVideoSrc={setVideoSrc} />
      </Box>
    </Container>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: 'transparent',
    zIndex: 9999,
  },
  title_h1: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
  },
  title_h2: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  },
};
