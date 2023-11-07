import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TitleHeader from './TitleHeader';

const items = [
  { heading: '20', content: ' Quote	 ', button: "Quote", path: '/Quotes' },
  { heading: '69', content: ' Quotes Category ', button: "Quotes Category ", path: '/Category' },
  { heading: '9', content: ' Shayari ', button: "Shayari", path: '/Shayari' },
  { heading: '1233', content: 'Shayari category ', button: "Shayari category", path: '/Shayari Category' },
  { heading: '543', content: ' Image', button: "Image", path: '/Image' },
  { heading: '123', content: 'Image Category  ', button: "Image Category", path: '/Image Category' },
  { heading: '45', content: 'ios', button: "ios", path: '/ios' },
  { heading: '78', content: 'Android ', button: "Android", path: '/Android' },
];
const buttonStyle = {
  backgroundColor: '#fff',
  color: '#59167C',
  fontSize: "1rem",
  fontWeight: "500",
  border: "none",
  padding: "0.8rem 2.4rem",
  borderRadius: "5px"
};
const Dashboard = () => {
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path);
  }
  return (
    <Box sx={{
      maxHeight: "50rem",
      overflowY: "auto",
      padding: "5rem 1rem 3rem",
    }}>
      <TitleHeader title="Dashboard" />
      <Grid container spacing={4} >
        {items.map((item, index) => (
          <Grid item xs={16} md={3} sm={16} key={index} >
            <Box elevation={4} className='dashboardbox'>
              <Typography variant="h5" component="h1" gutterBottom>
                {item.heading}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {item.content}
              </Typography>
              <button
                onClick={() => handleButtonClick(item.path)}
                style={buttonStyle}
                variant="contained"
                color="primary"
              >
                {item.button}
              </button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Dashboard;
