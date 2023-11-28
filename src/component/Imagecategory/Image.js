import React from 'react'
import { Box } from '@mui/material';
import TitleHeader from '../Global/TitleHeader';
import { categorydata } from "../../data/QuoteCategory";
import Imagemanage from '../ManageTable/image';
import "../../Style/Sidebar.css";
import { useContext } from "react";
import { BasicContext } from "../../context/BasicProvider";
import ImageModal from "../Modal/ImageModal" ; 

const Image = () => {
  const buttonStyle = {
    padding: "0.75rem 1.1875rem",
    borderRadius: " 0.125rem",
    background: " #723997",
    color: "#fff",
    fontSize: " 0.875rem",
    border: "none",
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    padding: "1rem",
    marginTop: "-3rem",
  };
  const { show, handleClose, handleShow } = useContext(BasicContext);

  return (
    <Box sx={{ padding: "5rem 1rem 3rem" }}>
      <TitleHeader title="Image" />
      <Box style={containerStyle}>
        <button style={buttonStyle} onClick={handleShow}>
          Add Image
        </button>
      </Box>
      <Imagemanage categorydata={categorydata} />
      {show && <ImageModal handleClose={handleClose} />}
    </Box>
  );
}

export default Image;
