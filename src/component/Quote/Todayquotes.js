import React from 'react'
import {   Box } from '@mui/material';
import TitleHeader from '../Global/TitleHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
    // Handle form submission logic here
    console.log('Input Value:', inputValue);
    console.log('Textarea Value:', textareaValue);
  };
  return (
    <>
    <Box sx={{padding:"5rem 1rem 3rem"}}>
       <TitleHeader title="Quotes Of The Day"/>
    
      <Box>
      <TextField
        label="Input Field"
        variant="outlined"
        fullWidth
        margin="normal"
        value={inputValue}
        onChange={handleInputChange}
      />
      <TextField
        label="Textarea"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={textareaValue}
        onChange={handleTextareaChange}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#59167C' }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
    </Box>
    </>
  );
};
  

export default Todayquotes

