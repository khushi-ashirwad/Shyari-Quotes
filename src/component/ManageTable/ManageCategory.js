import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  TableHead,
  Box,
  IconButton,
  Paper,
  TableBody,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from "react-redux";
import ModalComponent from "../Modal/Editshayari&quotes";
import { deleteCategory, getCategory, updateCategory, } from "../../redux/action/categoryAction";
import { getContent } from "../../redux/action/ContentAction";
import { BasicContext } from "../../context/BasicProvider";
import { useContext } from "react";
import {
  showSuccessAlert,
  showRemoveAlert2,
  showDeleteDataAlert,
} from "../Global/Validation";

const ManageCategory = ({ filterdata }) => {
  const { isEditModalOpen, setIsEditModalOpen, editedCategory, setEditedCategory } =
    useContext(BasicContext);
  const [defaultValues, setDefaultValues] = useState({
    name: "",
    description: "",
    file: null,
  });
  const tableCellStyle = {
    border: "2px solid #000",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "500",
  };

  const dispatch = useDispatch();
  const handleupdateCategory = (id, value) => {
    const data = {
      isdisable: value,
    };

    dispatch(updateCategory(id, data))
      .then(() => {
        dispatch(getCategory()).then(() => {
          dispatch(getContent());
          // showSuccessAlert('your data has been Disable');
        });
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
  };

  const handledeleteCategory = (id) => {
    showDeleteDataAlert('Are you sure you want to delete this category?', () => {
      dispatch(deleteCategory(id))
        .then(() => {
          dispatch(getCategory()).then(() => {
            dispatch(getContent());
            showRemoveAlert2('Category has been deleted.');
          });
        })
        .catch((error) => {
          console.error('Error deleting category:', error);
        });
    });
  };

  const handleEditClick = (item) => {
    setEditedCategory(item);
    setDefaultValues({
      name: item.name,
      description: item.description,
      file: item.file,
    });

    setIsEditModalOpen(true);
  };

  const handleSaveChanges = () => {
    const formData = new FormData();
    formData.append('name', defaultValues.name);
    formData.append('description', defaultValues.description);
    formData.append('file', defaultValues.file);

    dispatch(updateCategory(editedCategory._id, formData))
      .then(() => {
        dispatch(getCategory()).then(() => {
          dispatch(getContent());
          setIsEditModalOpen(false);
          showSuccessAlert('Category has been updated.');
        });
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
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
          <Table style={{ minWidth: "500px", height: "0.5rem" }}>
            <TableHead>
              <TableRow>
                <TableCell style={tableCellStyle}>Name</TableCell>
                <TableCell style={tableCellStyle}>Description</TableCell>
                <TableCell style={tableCellStyle}>Image</TableCell>
                <TableCell style={tableCellStyle}>Buttons</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterdata.map((item, index) => (
                <TableRow key={index}>
                  <TableCell style={tableCellStyle}>{item.name}</TableCell>
                  <TableCell style={tableCellStyle}>
                    {item.description}
                  </TableCell>
                  <TableCell style={tableCellStyle} sx={{ width: "15%", height: "7.5rem" }}>
                    <img
                      src={item.file}
                      alt={item.name}
                      style={{ width: "100%", height: "160%" }}
                    />
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
                        onClick={() => handledeleteCategory(item._id)}
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
                        onClick={() => handleEditClick(item)}
                      >
                        <EditIcon />
                        <Typography>Edit</Typography>
                      </IconButton>
                      {item.isdisable === true ? (
                        <IconButton
                          style={{
                            background: "#005792",
                            borderRadius: "8rem",
                            color: "#fff",
                          }}
                          onClick={() => handleupdateCategory(item._id, false)}
                        >
                          <VisibilityOffIcon />
                          <Typography>Disable</Typography>
                        </IconButton>
                      ) : (
                        <IconButton
                          style={{
                            background: "#005792",
                            borderRadius: "8rem",
                            color: "#fff",
                          }}
                          onClick={() => handleupdateCategory(item._id, true)}
                        >
                          < VisibilityIcon />
                          <Typography>Enable</Typography>
                        </IconButton>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </Box>
      <ModalComponent
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        editedCategory={editedCategory}
        defaultValues={defaultValues}
        setDefaultValues={setDefaultValues}
        handleSaveChanges={handleSaveChanges}
      />
    </>
  );
};

export default ManageCategory;
