import React from "react";
import { Box } from "@mui/material";
import TitleHeader from "../Global/TitleHeader";
import Imagemanage from "../ManageTable/image";
import "../../Style/Sidebar.css";
import { useContext } from "react";
import { BasicContext } from "../../context/BasicProvider";
import ImageModal from "../Modal/ImageModal" ; 
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getImage } from "../../redux/action/ImageAction";
import { GetImage } from "../Global/Getcategory";

const Image = () => {
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
  const { show, handleClose, handleShow, dataFetched, setDataFetched } =
    useContext(BasicContext);
  const dispatch = useDispatch();
  const currentimage = GetImage();
  useEffect(() => {
    dispatch(getImage());
    setDataFetched(false);
  }, [dispatch, dataFetched, setDataFetched]);

  return (
    <Box   className="full-screen"  sx={{ padding: "2rem 1rem 3rem" }}>
      <TitleHeader title="Image" />
      <Box style={containerStyle}>
        <button style={buttonStyle} onClick={handleShow}>
          Add Image
        </button>
      </Box>
      <Imagemanage imageData={currentimage} />
      {show && <ImageModal handleClose={handleClose} />}
    </Box>
  );
}

export default Image;
