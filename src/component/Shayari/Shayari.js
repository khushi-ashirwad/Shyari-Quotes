import React ,{useState} from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import TitleHeader from '../Global/TitleHeader';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import {PiTable} from "react-icons/pi"
import { quotesdata } from "../../data/Quotes";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ShayariTable = ({ data }) => {
  const tableCellStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "500",
  };
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
      <TableHead
        sx={{
          display: "flex",
          padding: "1rem 3rem",
          backgroundColor: "#F3F3F3",
          borderBottom: "2px solid #afabab",
        }}
      >
        <PiTable style={{fontSize:"1.9rem"}} />
        <Typography sx={{ fontSize: "1.3rem", paddingLeft: "1rem" }}>
          All Shayari
        </Typography>
      </TableHead>
      <Table>
        <TableHead sx={{ backgroundColor: "#F8F2FF" }}>
          <TableRow>
            <TableCell style={tableCellStyle}>Shayari</TableCell>
            <TableCell style={tableCellStyle}>Category</TableCell>
            <TableCell style={tableCellStyle}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((quoteData, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: index % 2 === 1 ? "#F8F2FF" : "transparent",
              }}
            >
              <TableCell style={tableCellStyle}>{quoteData.quote}</TableCell>
              <TableCell style={tableCellStyle}>{quoteData.category}</TableCell>
              <TableCell style={tableCellStyle}>
                <IconButton aria-label="edit" color="primary">
                  <FiEdit />
                </IconButton>
                <IconButton aria-label="delete" color="error">
                  <RiDeleteBin6Line />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const Shayari=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <TitleHeader title="Manage Shayari"/>
    <Box 
      style={containerStyle}
      >
        <button 
        style={buttonStyle}
        onClick={handleShow}
         >
          Add Category
        </button>
      </Box>
    <ShayariTable data={quotesdata}/>
    <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Shayari</Modal.Title>
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
         <label>Enter Shayari</label>
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
  )
}

export default Shayari







