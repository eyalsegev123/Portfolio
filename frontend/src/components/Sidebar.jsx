import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Sidebar = ({ open, onClose }) => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  const menuItems = [
    { id: 'home', text: 'Home', icon: <HomeIcon /> },
    { id: 'about', text: 'About Me', icon: <InfoIcon /> },
    { id: 'projects', text: 'Projects', icon: <WorkIcon /> },
    { id: 'contact', text: 'Contact', icon: <ContactMailIcon /> },
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{ '& .MuiDrawer-paper': { backgroundColor: 'black' } }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: 'white' }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;