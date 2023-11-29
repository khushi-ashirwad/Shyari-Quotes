import React, { useState, Component } from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const TodayShayariQuotes = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectedValue, setSelectedValue] = useState("noPaymentMethod");

  const handleSelectValue = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Input Value:", inputValue);
    console.log("Text Value:", textareaValue);
    console.log("Selected Value:", selectedValue);


  };
  const currentPath = window.location.pathname;
  return (
    <>
      <Box sx={{ padding: "5rem 1rem 3rem" }}>
        <Typography variant="h5"
          sx={{ fontWeight: "500" }}>
          {currentPath === "/Today%20Quotes" ? "Today Quotess" : "Today Shayari"}
        </Typography>
        <Box sx={{ margin: "2rem" }}>
          <Typography variant="h6">Developers </Typography><br/>
          <input type="text" value={inputValue}
            placeholder=" Developers name"
            style={{
              marginBottom: "1rem",
              backgroundColor: "#EDEFF5",
              padding: "1rem",
              border: "1px solid black",
              width: "70rem",
              height: "4rem"
            }}
            onChange={handleInputChange}
          /><br/>
          <Typography variant="h6">Category </Typography><br/>
          <select 
          style={{
            marginBottom: "1rem",
            backgroundColor: "#EDEFF5",
            border: "1px solid black",
            width: "70rem",
            height: "2.5rem",
            borderRadius:"1px"
            
          }}
            value={selectedValue}
            onChange={handleSelectValue}
            className="form-control"
            id="paymentMethod"
          ><ExpandMoreIcon/>
            <option value="noPaymentMethod">Select payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            {currentPath === "/Today%20Quotes" ? "Enter Your Quotes" : "Enter Your Shayari"}
          </Typography>
          <textarea style={{ padding: "2rem" }}
            rows="12"
            cols="142"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
        </Box>
        <Button
          sx={{ margin: " 0rem 2rem " }}
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#59167C" }}
          onClick={handleSubmit}
        >
          Save {currentPath === "/Today%20Quotes" ? "Quotes" : "Shayari"}
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
            Today {currentPath === "/Today%20Quotes" ? "Quotes" : "Shayari"}- Of The Day
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
            <p style={{ wordWrap: "break-word" }}>{textareaValue}</p>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TodayShayariQuotes;
