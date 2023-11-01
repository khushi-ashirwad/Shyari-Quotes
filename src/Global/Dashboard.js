import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const items = [
  { heading: '20', content: ' shayari category ' },
  { heading: '69', content: ' premium quotes ' },
  { heading: '9', content: ' shayari category ' },
  { heading: '1233', content: 'category ' },
  { heading: '543', content: ' shayari category ' },
  { heading: '123', content: 'shayari’s ' },
  { heading: '45', content: ' image ios' },
  { heading: '78', content: ' shayari category ' },
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
  return (
    <Box sx={{
      maxHeight: "50rem",
      overflowY: "scroll",
      padding: "2rem 5rem",
    }}>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "500",
          padding: "5rem 1rem 3rem"
        }}
      >
        DASHBOARD
      </Typography>
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
              <button style={buttonStyle} variant="contained" color="primary">
                Manage category
              </button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
