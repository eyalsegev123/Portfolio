import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '90vh',
        pt: '64px', // Add padding-top to account for header height
        backgroundImage: 'url("/path/to/your/image.jpg")', // Add your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', color: 'white' }}>
        <Typography variant="h2" gutterBottom>
          Hi, I'm Eyal
        </Typography>
        <Typography variant="h4" gutterBottom>
          Student Software Engineer
        </Typography>
        <Typography variant="h6">
          My passion is programming
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
