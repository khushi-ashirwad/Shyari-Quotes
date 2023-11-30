import React  from "react";
import { Box } from "@mui/material";
import TitleHeader from "../Global/TitleHeader";
import "../../Style/Sidebar.css";
import ManageCategory from "../ManageTable/ManageCategory";
import { useContext, useEffect } from "react";
import { BasicContext } from "../../context/BasicProvider";
import CategoryModal from "../Modal/CategoryModal";
import { useDispatch } from "react-redux";
import { getCategory } from "../../redux/action/categoryAction";
import Getcategory from "../Global/Getcategory";

const QuoutesCategory = () => {
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
  const { handleShow ,dataFetched,setDataFetched} = useContext(BasicContext);
  const currentPath = window.location.pathname;
  const dispatch = useDispatch();
  const categories = Getcategory();
  const filterQuotes=categories.filter(category=>category.type==="quotes");

  useEffect(() => {
    if (!dataFetched) {
      dispatch(getCategory());
      setDataFetched(true);
    }
  }, [dispatch,dataFetched,setDataFetched]);
  
  return (
    <Box
      className="full-screen"
      sx={{ padding: "2rem 1rem 3rem", justifyContent: "end" }}
    >
      <TitleHeader title="Manage Quotes Category" />
      <Box style={containerStyle}>
        <button style={buttonStyle} onClick={handleShow}>
          Add Category
        </button>
      </Box>
      <ManageCategory filterdata={filterQuotes} />
      <CategoryModal currentPath={currentPath} />
    </Box>
  );
};

export default QuoutesCategory;
