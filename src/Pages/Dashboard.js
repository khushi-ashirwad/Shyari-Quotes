import React from 'react';
import { Grid, Paper, Typography, Button,Box } from '@mui/material';



const items = [
  { heading: 'Box 1', content: 'Content for Box 1' },
  { heading: 'Box 2', content: 'Content for Box 2' },
  { heading: 'Box 3', content: 'Content for Box 3' },
  { heading: 'Box 4', content: 'Content for Box 4' },
  { heading: 'Box 5', content: 'Content for Box 5' },
  { heading: 'Box 6', content: 'Content for Box 6' },
  { heading: 'Box 7', content: 'Content for Box 6' },
  { heading: 'Box 8', content: 'Content for Box 6' },


];
const buttonStyle = {
  backgroundColor: '#fff',
  color: '#59167C',
  fontSize:"1rem",
  fontWeight:"500",
  border:"none",
  padding:"0.8rem 2.4rem",
  borderRadius:"5px"
};

const Dashboard = () => {
  return (
    <Box>
<Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "500",
          padding: "6rem 1rem 3rem"
        }}
      >
        DASHBOARD
      </Typography>   
       <Grid container spacing={2} >
      {items.map((item, index) => (
        <Grid item xs={10} md={3} key={index} >
          <Box elevation={4}  className='dashboardbox'>
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
