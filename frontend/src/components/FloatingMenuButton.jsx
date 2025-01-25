import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Fade from '@mui/material/Fade';

const FloatingMenuButton = ({ isVisible, onClick }) => {
  return (
    <Fade in={isVisible}>
      <IconButton
        onClick={onClick}
        sx={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.2s',
        }}
      >
        <MenuIcon />
      </IconButton>
    </Fade>
  );
};

export default FloatingMenuButton;
