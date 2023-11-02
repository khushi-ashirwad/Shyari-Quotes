import React from 'react';
import { Typography } from '@mui/material';

const TitleHeader = ({title}) => {
  return (
   <>
    <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "700",
          paddingBottom:"2rem",
          fontWeight:500
        }}
      >
        {title}
      </Typography>
   </>
  )
}

export default TitleHeader