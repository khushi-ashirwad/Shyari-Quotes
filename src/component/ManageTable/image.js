import React from 'react'
import { Table,TableCell,TableContainer,TableRow,Typography,TableHead,Box,IconButton, Paper,TableBody} from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Imagemanage = ({categorydata}) => {
    const tableCellStyle = {
        border: "2px solid #000",
        padding: "1.5rem 3rem",
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "500",
        width:"55rem",
      };
  return (
   <>
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
                  <TableCell
                    sx={{
                      border: "2px solid black",
                      width: "6rem",
                      padding: "2.5rem 5rem",
                    }}
                  >
                    <Box
                      sx={{
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
                          marginRight: "0.5rem",
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
                          marginRight: "0.5rem",
                        }}
                      >
                        <EditIcon />
                        <Typography>Edit</Typography>
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>  
   </>
  )
}

export default Imagemanage