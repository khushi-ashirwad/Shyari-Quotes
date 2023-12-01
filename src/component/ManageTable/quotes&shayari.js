import React, { useState,useContext } from "react";
import {
  TableBody,
  TableCell,
  Typography,
  Table,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  IconButton,
} from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { PiTable } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { deleteContent, getContent, updateContent } from "../../redux/action/ContentAction";
import ModalContentComponent from "../Modal/ManageModal";
import { BasicContext } from "../../context/BasicProvider";
import {
  showRemoveAlert2,
  showDeleteDataAlert,
  showSuccessAlert
} from "../Global/Validation";
const Manage = ({ content }) => {
  const { isEditModalOpen, setIsEditModalOpen, editedContent, setEditedContent } =
    useContext(BasicContext);
  const [defaultValues, setDefaultValues] = useState({
    content: "",
    category: "",
  });
  const tableCellheadingStyle={
    border: "1px solid #ccc",
    padding: "15px",
    textAlign: "center",
    fontSize: "21px",
    fontWeight: "500",
  }
  const tableCellStyle = {
    border: "1px solid #ccc",
    padding: "2px",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "400",
  };
  const dispatch = useDispatch();
  const currentPath = window.location.pathname;
  const handleEditClick = (item) => {
    console.log("Edit button clicked:", item);
    setEditedContent(item);
    setDefaultValues({
      content: item.content,
      category: item.category.name,
    });

    setIsEditModalOpen(true);
  };

  const handleSaveChanges = () => {
    const updatedContent = {
      content: defaultValues.content,
      category: defaultValues.category,
    };

  
    dispatch(updateContent(editedContent._id, updatedContent))
      .then(() => {
        dispatch(getContent());
        setIsEditModalOpen(false);
        showSuccessAlert(`${updatedContent.content} has been updated.`);
        
      })
      .catch((error) => {
        console.error("Error updating content:", error);
        showRemoveAlert2(`${editedContent.content} has been deleted.`);
      });
  };
  
  const handledeleteContent = (id) => {
    showDeleteDataAlert("Please fill in all fields.", () => {
      dispatch(deleteContent(id)).then(() => {
        dispatch(getContent());
        showRemoveAlert2(`${editedContent.content} has been deleted.`);
      });
    });
  };
  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
        <TableHead
          sx={{
            display: "flex",
            padding: "1rem 3rem",
            backgroundColor: "#F3F3F3",
            borderBottom: "2px solid #afabab",
          }}
        >
          <PiTable style={{ fontSize: "1.9rem" }} />
          <Typography sx={{ fontSize: "1.3rem", paddingLeft: "1rem" }}>
            All {currentPath === "/Quotes" ? "Quotes" : "Shayari"}
          </Typography>
        </TableHead>
        <Table style={{ minWidth: "500px" }}>
          <TableHead sx={{ backgroundColor: "#F8F2FF" }}>
            <TableRow>
              <TableCell style={tableCellheadingStyle} sx={{width:"60rem"}}>
                {currentPath === "/Quotes" ? "Quotes" : "Shayari"}
              </TableCell>
              <TableCell style={tableCellheadingStyle}>Category</TableCell>
              <TableCell style={tableCellheadingStyle}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((contantData, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 1 ? "#F8F2FF" : "transparent",
                }}
              >
                <TableCell style={tableCellStyle}>
                  {contantData.content}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  {contantData.category.name}
                </TableCell>
                <TableCell style={tableCellStyle}>
                  <IconButton aria-label="edit" color="primary" onClick={() => handleEditClick(contantData)}>
                    <FiEdit />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => handledeleteContent(contantData._id)}
                  >
                    <RiDeleteBin6Line />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ModalContentComponent
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          editedContent={editedContent}
          defaultValues={defaultValues}
          setDefaultValues={setDefaultValues}
          handleSaveChanges={handleSaveChanges}
        />
      </TableContainer>
    </>
  );
};

export default Manage;
