import React ,{useEffect} from 'react'
import {  Box } from '@mui/material';
import TitleHeader from '../Global/TitleHeader';
import "../../Style/Sidebar.css";
import { useContext } from "react";
import { BasicContext } from "../../context/BasicProvider";
import ManageCategory from '../ManageTable/ManageCategory';
import { useDispatch } from 'react-redux';
import Getcategory from '../Global/Getcategory';
import { getCategory } from '../../redux/action/categoryAction';
import CategoryModal from '../Modal/CategoryModal';

const Imagecategory=()=> {
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
  const {handleShow,setDataFetched,dataFetched} = useContext(BasicContext)
  const currentPath = window.location.pathname;
  console.log(currentPath);
  const dispatch = useDispatch();
  const categories = Getcategory();
  const filterimage=categories.filter(category=>category.type==="image");
  useEffect(() => {
    if (!dataFetched) {
      dispatch(getCategory());
      setDataFetched(true);
    }
  }, [dispatch,dataFetched,setDataFetched]);
  return (
    <Box
    className="full-screen" 
    sx={{padding:"5rem 1rem 3rem"}}>
      <TitleHeader title="Manage Image "/>
          <Box style={containerStyle}>
        <button style={buttonStyle} onClick={handleShow}>
          Add Category
        </button>
      </Box>
      <ManageCategory filterdata={ filterimage}/>
      <CategoryModal currentPath={currentPath}/>
    </Box>
  )
}

export default Imagecategory




