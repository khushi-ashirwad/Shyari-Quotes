import React from "react";
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
  Link,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import { categorydata } from "../../data/QuoteCategory";
import TitleHeader from "../Global/TitleHeader";

const Category = () => {
  const tableCellStyle = {
    border: "2px solid #000",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "500",
  };

  return (
    <Box className="full-screen" sx={{ padding: "5rem 1rem 3rem" }}>
      <TitleHeader title="Manage Quotes Category" />
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
                  <TableCell style={tableCellStyle}>
                    {item.buttons.map((button, btnIndex) => (
                      <Box key={btnIndex} style={{ marginBottom: "5px" }}>
                        {button.text === "Button 1" && (
                          <IconButton
                            href={button.action}
                            style={{
                              background: "#AD1D45",
                              borderRadius: "3rem",
                              color: "#fff",
                              padding: "0.5rem 2.5rem",
                            }}
                          >
                            <DeleteIcon />
                            <Typography>Delete</Typography>
                          </IconButton>
                        )}
                        {button.text === "Button 2" && (
                          <IconButton
                            href={button.action}
                            style={{
                              background: "#6643B5",
                              borderRadius: "3rem",
                              color: "#fff",
                              padding: "0.5rem 3rem",
                            }}
                          >
                            <EditIcon />
                            <Typography>Edit</Typography>
                          </IconButton>
                        )}
                        {button.text === "Button 3" && (
                          <IconButton
                            href={button.action}
                            style={{
                              background: "#005792",
                              borderRadius: "8rem",
                              color: "#fff",
                              padding: "0.5rem 2.3rem",
                            }}
                          >
                            <VisibilityOffIcon />
                            <Typography>Disable</Typography>
                          </IconButton>
                        )}
                      </Box>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Category;
