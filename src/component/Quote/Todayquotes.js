import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TitleHeader from "../Global/TitleHeader";
import Button from "@mui/material/Button";

const Todayquotes = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Input Value:", inputValue);
    console.log("Text Value:", textareaValue);

  };
  return (
    <>
      <Box sx={{ padding: "5rem 1rem 3rem" }}>
        <TitleHeader title="Quotes Of The Day" />

        <Box sx={{ margin: "2rem" }}>
          <Typography variant="h6">Developers </Typography>
          <input type="text" value={inputValue}
            placeholder=" Developers name"
            style={{
              marginBottom: "2rem",
              backgroundColor: "#EDEFF5",
              padding: "1rem",
              border: "1px solid black",
              width: "70rem",
              height: "4rem"
            }}
            onChange={handleInputChange}
          />
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            Enter Your Quotes
          </Typography>
          <textarea  style={{padding:"2rem"}}
          rows="14" 
          cols="142"
          value={textareaValue}
          onChange={handleTextareaChange}
          />
        </Box>
        <Button
          sx={{ margin: " 0 2rem " }}
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#59167C" }}
          onClick={handleSubmit}
        >
          Save Quotes
        </Button>
      </Box>
      <Box sx={{ flex: 1, padding: "11rem 1rem" }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "1rem 1rem",
            width: "22rem",
            border: "1px solid #000",
            borderBottom: "none",
          }}
        >
          <Typography variant="h5" sx={{ alignItems: "center" }}>
            Today Quotes- Of The Day
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid #000",
            width: "22rem",
            height: "15rem",
            backgroundColor: "#FBFBFB",
          }}
        >
          <Typography sx={{ margin: "1.5rem" }}>
            <p style={{wordWrap:"break-word"}}>{textareaValue}</p>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Todayquotes;
