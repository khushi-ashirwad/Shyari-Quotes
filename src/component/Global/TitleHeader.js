import React from 'react';
import { Typography } from '@mui/material';

const TitleHeader = ({title}) => {
  return (
   <>
    <Typography
        sx={{
          fontSize: "1.5rem",
          paddingBottom:"2rem",
          fontWeight:700
        }}
      >
        {title}
      </Typography>
   </>
  )
}

export default TitleHeader