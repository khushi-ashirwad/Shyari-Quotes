import React from "react";
import {
  Box,
} from "@mui/material";
import TitleHeader from "../Global/TitleHeader";
import ManageCategory from "../ManageTable/ManageCategory";
import { useContext,useEffect } from "react";
import { BasicContext } from "../../context/BasicProvider";
import CategoryModal from "../Modal/CategoryModal";
import { getCategory } from "../../redux/action/categoryAction";
import { useDispatch,useSelector} from "react-redux";

const Shayaricategory = () => {
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
const {handleShow} = useContext(BasicContext)
const currentPath = window.location.pathname;
const dispatch = useDispatch();
const { category } = useSelector((state) => state.categoryRducer);
const currentvalue = category
const filterShayari=currentvalue.filter(category=>category.type==="shayari");

useEffect(() => {
  dispatch(getCategory());
}, [dispatch,currentvalue]);

  return (
    <>
      <Box className="full-screen" sx={{ padding: "5rem 1rem 3rem" }}>
        <TitleHeader title="Manage Shayari Category " />
        <Box style={containerStyle}>
          <button style={buttonStyle} onClick={handleShow}>Add Category</button>
        </Box>
        <ManageCategory filterdata={filterShayari}/>
        <CategoryModal currentPath={currentPath}/>
      </Box>
    </>
  );
};

export default Shayaricategory;
