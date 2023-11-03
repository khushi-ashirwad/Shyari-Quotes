import React from 'react'
import { Table,TableCell,TableContainer,TableRow,Typography,TableHead,Box,IconButton, Paper,TableBody} from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ManageCategory = ({categorydata}) => {
    const tableCellStyle = {
        border: "2px solid #000",
        padding: "1rem",
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "500",
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
   </>
  )
}

export default ManageCategory