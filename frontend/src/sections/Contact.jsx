import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Alert, Snackbar, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from '@mui/material/IconButton';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: 'All fields are required!',
        severity: 'warning',
      });
      return;
    }

    setIsSending(true); // Disable the button while sending
    emailjs
      .send(
        'service_1qki0c6', // Your EmailJS service ID
        'template_0xjgxrl', // Your EmailJS template ID
        formData,
        'G-HZd_g6OMencz75V' // Your EmailJS public key
      )
      .then((result) => {
        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success',
        });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        setSnackbar({
          open: true,
          message: `Failed to send message: ${error.text || 'Unknown error'}`,
          severity: 'error',
        });
      })
      .finally(() => setIsSending(false)); // Re-enable the button
  };

  return (
    <Box id="contact" sx={{ minHeight: '90vh', py: 8, backgroundColor: '#121212' }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ color: 'white', mb: 4 }}>
          Contact Me
        </Typography>
        
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                aria-label="Name"
                margin="normal"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              />
              <TextField
                fullWidth
                label="Email"
                aria-label="Email"
                margin="normal"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              />
              <TextField
                fullWidth
                label="Message"
                aria-label="Message"
                margin="normal"
                multiline
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
                disabled={isSending} // Disable while sending
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Grid>

          {/* Social Links Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}>
              <IconButton
                color="inherit"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/eyal-segev/"
                target="_blank"
                sx={{
                  color: 'white',
                  width: '64px',
                  height: '64px',
                  '&:hover': {
                    color: '#0077b5',
                    transform: 'scale(1.1)',
                  },
                  transition: 'transform 0.2s',
                }}
              >
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </IconButton>

              <IconButton
                color="inherit"
                aria-label="GitHub"
                href="https://github.com/eyalsegev123/"
                target="_blank"
                sx={{
                  color: 'white',
                  width: '64px',
                  height: '64px',
                  '&:hover': {
                    color: '#6e5494',
                    transform: 'scale(1.1)',
                  },
                  transition: 'transform 0.2s',
                }}
              >
                <GitHubIcon sx={{ fontSize: 40 }} />
              </IconButton>

              <Button
                color="inherit"
                href="/Eyal_Segev_resume.pdf"
                download
                startIcon={<DownloadIcon />}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  padding: '12px 24px',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'transform 0.2s',
                }}
              >
                Download CV
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
