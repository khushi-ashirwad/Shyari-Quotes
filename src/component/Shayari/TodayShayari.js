import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TitleHeader from "../Global/TitleHeader";
import Button from "@mui/material/Button";


const TodayShayari = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }; const [textareaValue, setTextareaValue] = React.useState("");

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Input Value:", inputValue);
  };


  return (
    <>
      <Box sx={{ padding: "5rem 1rem 3rem" }}>
        <TitleHeader title="Shayari Of The Day" />

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
            Enter Your Shayari
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
          Save Shayari
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
          <Typography variant="h6" sx={{ alignItems: "center" }}>
            Today Shayari- Of The Day
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
  )
}

export default TodayShayari
