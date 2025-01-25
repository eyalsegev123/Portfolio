import React, { useState } from 'react';
import { Box, Container, Grid, Avatar, Tabs, Tab, Typography } from '@mui/material';
import Slider from 'react-slick';

const About = () => {
  const [tab, setTab] = useState(0);

  const TabPanel = ({ children, value, index }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  const jobExperiences = [
    {
      title: 'Programming Instructor',
      company: 'Cyber Education Center',
      period: 'Oct 2024 - Present',
      description: 'Description of your role and achievements'
    },
    {
      title: 'Software Developer Intern',
      company: 'Tech Company',
      period: 'Jun 2023 - Sep 2023',
      description: 'Description of your role and achievements'
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc.',
      period: 'Jan 2022 - May 2023',
      description: 'Description of your role and achievements'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box id="about" sx={{ minHeight: '90vh', py: 8, backgroundColor: '#121212' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Avatar
              src="/path/to/profile-picture.jpg" // Add your image path
              sx={{ width: 300, height: 300, margin: 'auto', borderRadius: '50% 20%' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ color: 'white', mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1">
                Hi! I'm a third-year Computer Science student at Ben Gurion University with a great passion and motivation for programming, technology, and tackling complex problems. I'm a strong communicator with quick self-learning abilities and a true love for programming. I'm currently seeking a position as a Student Software Engineer.
              </Typography>
            </Box>

            <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
              <Tab label="Skills" />
              <Tab label="Experience" />
              <Tab label="Education" />
            </Tabs>
            
            <TabPanel value={tab} index={0}>
              <Box sx={{ color: 'white' }}>
                <Typography variant="h6" gutterBottom>Technical Skills</Typography>
                <Grid container spacing={2}>
                  {['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'Git'].map((skill) => (
                    <Grid item xs={6} sm={4} key={skill}>
                      <Box sx={{ 
                        p: 2, 
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderRadius: 1,
                        textAlign: 'center'
                      }}>
                        {skill}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>

            <TabPanel value={tab} index={1}>
              <Box sx={{ color: 'white' }}>
                <Typography variant="h6" gutterBottom>Work Experience</Typography>
                <Box sx={{ maxWidth: 350, ml: 0 }}>
                  <Slider {...settings}>
                    {jobExperiences.map((job, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">{job.title}</Typography>
                        <Typography variant="body2">{job.company} • {job.period}</Typography>
                        <Typography variant="body2">{job.description}</Typography>
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Box>
            </TabPanel>

            <TabPanel value={tab} index={2}>
              <Box sx={{ color: 'white' }}>
                <Typography variant="h6" gutterBottom>Education</Typography>
                <Box sx={{ mb: 2 }}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <img src="/bengurion_logo.png" alt="Ben Gurion University" style={{ width: 50, height: 50 }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">Ben Gurion University</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2">Pursuing Bachelor's in Computer Science</Typography>
                  <Typography variant="body2">2022 - 2026</Typography>
                </Box>
              </Box>
            </TabPanel>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
