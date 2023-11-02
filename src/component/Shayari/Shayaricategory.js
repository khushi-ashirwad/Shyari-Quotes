import React,{useState} from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TitleHeader from "../Global/TitleHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import { categorydata } from "../../data/QuoteCategory";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Shayaricategory = () => {
  const tableCellStyle = {
    border: "2px solid #000",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "500",
  };
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Box className="full-screen" sx={{ padding: "5rem 1rem 3rem" }}>
        <TitleHeader title="Manage Shayari Category " />
        <Box style={containerStyle}>
          <button style={buttonStyle} onClick={handleShow}>Add Category</button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{ overflowX: "auto", width: "100%" }}
          >
            <Table style={{ minWidth: "500px" }}>
              <TableHead>
                <TableRow>
                  <TableCell style={tableCellStyle}>Name</TableCell>
                  <TableCell style={tableCellStyle}>Description</TableCell>
                  <TableCell style={tableCellStyle}>Image</TableCell>
                  <TableCell style={tableCellStyle}>IsSensitive</TableCell>
                  <TableCell style={tableCellStyle}>Buttons</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categorydata.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell style={tableCellStyle}>{item.name}</TableCell>
                    <TableCell style={tableCellStyle}>
                      {item.description}
                    </TableCell>
                    <TableCell style={tableCellStyle}>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </TableCell>
                    <TableCell style={tableCellStyle}>
                      {item.isSensitive ? "Yes" : "No"}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "2px solid black",
                        width: "6rem",
                        padding: "2rem 3rem",
                      }}
                    >
                      <Box
                        sx={{
                          flexDirection: "column",
                          display: "flex",
                          width: "8rem",
                          justifyContent: "center",
                        }}
                      >
                        <IconButton
                          style={{
                            background: "#AD1D45",
                            borderRadius: "3rem",
                            color: "#fff",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <DeleteIcon />
                          <Typography>Delete</Typography>
                        </IconButton>
                        <IconButton
                          style={{
                            background: "#6643B5",
                            borderRadius: "3rem",
                            color: "#fff",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <EditIcon />
                          <Typography>Edit</Typography>
                        </IconButton>
                        <IconButton
                          style={{
                            background: "#005792",
                            borderRadius: "8rem",
                            color: "#fff",
                          }}
                        >
                          <VisibilityOffIcon />
                          <Typography>Disable</Typography>
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
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
    </>
  );
};

export default Shayaricategory;
