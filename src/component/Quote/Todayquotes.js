import React from 'react'
import {   Box, Typography } from '@mui/material';
import TitleHeader from '../Global/TitleHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

const Todayquotes=()=> {
  const [inputValue, setInputValue] = React.useState('');
  const [textareaValue, setTextareaValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Input Value:', inputValue);
    console.log('Textarea Value:', textareaValue);
  };
 
  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 70rem;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
  `,
  );
  return (
    <>
    <Box sx={{padding:"5rem 1rem 3rem"}}>
       <TitleHeader title="Quotes Of The Day"/>
    
      <Box sx={{margin:"2rem"}}>
        <Typography variant='h6'>Developers </Typography>
      <TextField
      sx={{marginBottom:"2rem",backgroundColor:"#EDEFF5"}}
        label="Developers name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Typography  variant='h6' sx={{marginBottom:"1rem"}}>Enter Your Quotes</Typography>
      <Textarea 
       aria-label="minimum height" minRows={18}  placeholder=""
        value={textareaValue}
        onChange={handleTextareaChange}
      />
    </Box>
    <Button
    sx={{margin:" 0 2rem "}}
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#59167C' }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
    <Box sx={{ flex: 1, padding: '11rem 1rem' }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              padding: '1rem 1rem',
              width:"20rem",
              height:"1.5rem",
              border:'1px solid #000',
              borderBottom:"none"
            }}
          >
            <Typography variant="h5" sx={{ alignItems:"center" }}>
            Today Quotes- Of The Day             
            </Typography>
          </Box>
          <Box sx={{border:"1px solid #000",width:"22rem",height:"15rem",backgroundColor:"#FBFBFB"}}>
            <Typography sx={{margin:"1.5rem"}}>प्रभु खोजने से नहीं मिलते…उसमें “खो – जाने” से मिलते है…!</Typography>
          </Box>
   
        </Box>
    </>
  );
};
  

export default Todayquotes

