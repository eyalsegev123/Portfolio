import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ESLogo from '../assets/ESLogo.png';
import backgroundImage from '../assets/HeaderBackground.jpg';
import Box from '@mui/material/Box';
import useInView from '../hooks/useInView';

const Header = ({onSidebarToggle, onHomeInView }) => {
  const isHomeInView = useInView('home');
  
  React.useEffect(() => {
    onHomeInView(isHomeInView);
  }, [isHomeInView, onHomeInView]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isHomeInView ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onSidebarToggle}
            sx={{
              color: 'white',
              '&:hover': {
                transform: 'scale(1.1)',
              },
              transition: 'transform 0.2s',
            }}
          >
            <MenuIcon />
          </IconButton>
           
          <img src={ESLogo} alt="ES Logo" style={{ height: '40px', marginLeft: '16px' }} />
          <div style={{ flexGrow: 1 }}></div>
          
          <Box>
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <Button
                key={section}
                color="inherit"
                onClick={() => scrollToSection(section)}
                sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
              >
                {section}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;