import React from "react";
import {
  Box,
} from "@mui/material";
import TitleHeader from "../Global/TitleHeader";
import { categorydata } from "../../data/QuoteCategory";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ManageCategory from "../ManageTable/ManageCategory";
import { useContext } from "react";
import { BasicContext } from "../../context/BasicProvider";

const Shayaricategory = () => {
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
const {show,handleClose,handleShow} = useContext(BasicContext)
  return (
    <>
      <Box className="full-screen" sx={{ padding: "5rem 1rem 3rem" }}>
        <TitleHeader title="Manage Shayari Category " />
        <Box style={containerStyle}>
          <button style={buttonStyle} onClick={handleShow}>Add Category</button>
        </Box>
        <ManageCategory categorydata={ categorydata}/>
        <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Quotes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <label>Enter Name</label>
         <br/>
         <input type="text" value="" style={{width:"100%",border:"1px solid #7E7E7E",background:"#EDEFF5"}}/>
         <br/>
         <br/>
         <label>Description</label>
         <br/>
         <input type="text" value="" style={{width:"100%",border:"1px solid #7E7E7E",background:"#EDEFF5"}}/>
         <br/><br/>
         <label>Thumbnail</label>
         <br/>
         <input type="file" style={{width:"100%",border:"1px solid #7E7E7E",padding:"0.2rem",background:"#EDEFF5"}}/>
        </Modal.Body>
        <Modal.Footer style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
          <Button
            style={{ backgroundColor: "#A30D11", border: "none",padding:"0.5rem 2rem" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#59167C", border: "none",padding:"0.5rem 2rem" }}
            onClick={handleClose}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      </Box>
    </>
  );
};

export default Shayaricategory;
