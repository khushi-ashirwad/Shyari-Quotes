import {React,useContext} from "react";
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
import { useDispatch } from "react-redux";
import { getContent } from "../../redux/action/ContentAction";
import { deleteImage, getImage,updateImage } from "../../redux/action/ImageAction";
import EditImage from "../../component/Modal/EditImageModal";
import { BasicContext } from "../../context/BasicProvider";
const Imagemanage = ({ imageData }) => {
  const {editModalOpen, setEditModalOpen,selectedImageData, setSelectedImageData } =
  useContext(BasicContext);
 
  const dispatch = useDispatch();

  const tableCellStyle = {
    border: "2px solid #000",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "500",
  };
  const handleEdit = (item) => {
    setSelectedImageData(item);
    setEditModalOpen(true);
  };
  
  const handleUpdate = (id, updatedData) => {
    dispatch(updateImage(id, updatedData)).then(() => {
      dispatch(getImage()).then(() => {
        dispatch(getContent());
        setEditModalOpen(false); 
      });
    }).catch((error) => {
      console.error('Error updating image:', error);
    });
  };
  
  const handleDelete = (id) => {
    dispatch(deleteImage(id)).then(() => {
      dispatch(getImage()).then(() => {
        dispatch(getContent());
      });    
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
              {imageData
                ? imageData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell style={tableCellStyle}>{item.name}</TableCell>
                      <TableCell style={tableCellStyle} sx={{ width: "50rem" }}>
                        {item.description}
                      </TableCell>
                      <TableCell
                        style={tableCellStyle}
                        sx={{ width: "15%", height: "7.5rem" }}
                      >
                        <img
                          src={item.file}
                          alt={item.name}
                          style={{ width: "100%", height: "170%" }}
                        />
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "2px solid black",
                          width: "15rem",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
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
                            onClick={() => handleDelete(item._id)}
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
                            onClick={() => handleEdit(item)}

                          >
                            <EditIcon />
                            <Typography>Edit</Typography>
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {selectedImageData && (
        <EditImage
          isOpen={editModalOpen}
          onClose={() => {
            setEditModalOpen(false);
            setSelectedImageData(null);
          }}
          imageData={selectedImageData}
          handleUpdate={handleUpdate}
        />
      )}
    </>
  );
};

export default Imagemanage;
