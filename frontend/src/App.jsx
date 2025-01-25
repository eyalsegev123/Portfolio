import React, { useState } from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import FloatingMenuButton from './components/FloatingMenuButton';
import { ThemeProvider, createTheme } from '@mui/material';
import Sidebar from './components/Sidebar'; // Adjust the path as necessary

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
  },
});

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isHomeInView, setIsHomeInView] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <Header
          onSidebarToggle={handleSidebarToggle}
          onHomeInView={setIsHomeInView}
        />
        <FloatingMenuButton 
          isVisible={!isHomeInView && !sidebarOpen}
          onClick={handleSidebarToggle}
        />
        <Sidebar 
          open={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
        />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
