import React from 'react';
import { Box, Container, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Slider from 'react-slick';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-profile/project1'
    },
    {
      title: 'Project 2',
      description: 'This is a description of Project 2.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-profile/project2'
    },
    {
      title: 'Project 3',
      description: 'This is a description of Project 3.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-profile/project3'
    },
    {
      title: 'Project 4',
      description: 'This is a description of Project 4.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-profile/project4'
    },
    {
      title: 'Project 5',
      description: 'This is a description of Project 5.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-profile/project5'
    },
    {
      title: 'Project 6',
      description: 'This is a description of Project 6.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-profile/project6'
    },
    {
      title: 'Project 7',
      description: 'This is a description of Project 7.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-profile/project7'
    },
    {
      title: 'Project 8',
      description: 'This is a description of Project 8.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-profile/project8'
    },
    {
      title: 'Project 9',
      description: 'This is a description of Project 9.',
      image: 'https://via.placeholder.com/300',
      link: 'https://github.com/your-profile/project9'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <Box id="projects" sx={{ minHeight: '90vh', py: 8, backgroundColor: 'black' }}>
      <Container>
        <Typography variant="h3" sx={{ color: 'white', mb: 4 }}>
          Projects
        </Typography>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Box key={index} px={2}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: '#121212',
                    mx: 2,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Projects;
