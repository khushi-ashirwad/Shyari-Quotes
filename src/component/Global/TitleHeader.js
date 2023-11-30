import React from 'react';
import { Typography } from '@mui/material';

const TitleHeader = ({title}) => {
  return (
   <>
    <Typography
        sx={{
          fontSize: "1.5rem",
          paddingBottom:"1rem",
          fontWeight:500
        }}
      >
        {title}
      </Typography>
   </>
  )
}

export default TitleHeader