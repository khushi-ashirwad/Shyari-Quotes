import React  from "react";
import {
  Box,
} from "@mui/material";
import TitleHeader from "../Global/TitleHeader";
import { quotesdata } from "../../data/Quotes";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Manage from "../ManageTable/Manage";
import { useContext } from "react";
import { BasicContext } from "../../context/BasicProvider";

const Quotes = () => {
  const {show,handleClose,handleShow} = useContext(BasicContext)

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
    marginTop: "-3.5rem",
  };
  return (
    <Box
      className="full-screen"
      sx={{
        padding: "5rem 1rem 3rem",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        width: "140rem",
      }}
    >
      <TitleHeader title="Manage Quotes" />
      <Box style={containerStyle}>
        <button style={buttonStyle} onClick={handleShow}>Add Category</button>
      </Box>
      <Manage data={quotesdata}/>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Quotes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <label>select category </label>
         <br/>
         <select style={{width:"100%",border:" none",background:"#EDEFF5",padding:"0.5rem 0.5rem"}}>
            <option value="angry">Angry</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
         </select>
         <br/>
         <br/>
         <label>Enter Quotes</label>
         <br/>
         <textarea value="" style={{width:"100%",border:"1px solid #7E7E7E",}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#A30D11", border: "none" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#59167C", border: "none" }}
            onClick={handleClose}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Box>
  );
};

export default Quotes;
