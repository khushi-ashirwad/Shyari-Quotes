import React,{useContext,useEffect} from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TitleHeader from "./TitleHeader";
import Getcategory, { GetImage, GetShayari, Getcontent } from "./Getcategory";
import { getContent } from "../../redux/action/QuoteAction";
import { getCategory } from "../../redux/action/categoryAction";
import { BasicContext } from "../../context/BasicProvider";
import { useDispatch } from "react-redux";
import { getImage } from "../../redux/action/ImageAction";
import { getShayari } from "../../redux/action/ShayatiAction";

const buttonStyle = {
  backgroundColor: "#fff",
  color: "#59167C",
  fontSize: "1rem",
  fontWeight: "500",
  border: "none",
  padding: "0.8rem 2.4rem",
  borderRadius: "5px",
};
const Dashboard = () => {
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path);
  };
  const {dataFetched,setDataFetched} = useContext(BasicContext)
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!dataFetched){
    dispatch(getContent());
    dispatch(getCategory());
    dispatch(getImage());
    dispatch(getShayari())
    setDataFetched(true)
    }
  },[dispatch,dataFetched,setDataFetched])
  const categories = Getcategory();
  const content = Getcontent();
  const image= GetImage();
  const shayari = GetShayari();
  const filterquotecategory = categories.filter(
    (category) => category.type === "quotes"
  );
  const filteshayaricategory = categories.filter(
    (category) => category.type === "shayari"
  );
  const filteimagecategory = categories.filter(
    (category) => category.type === "image"
  );

  
  const items = [
    {
      heading: content.length,
      content: " Quote	 ",
      button: "Quote",
      path: "/Quotes",
    },
    {
      heading: filterquotecategory.length,
      content: " Quotes Category ",
      button: "Quotes Category ",
      path: "/Category",
    },
    {
      heading: shayari.length,
      content: " Shayari ",
      button: "Shayari",
      path: "/Shayari",
    },
    {
      heading: filteshayaricategory.length,
      content: "Shayari category ",
      button: "Shayari category",
      path: "/Shayari Category",
    },
    { heading: image.length, content: " Image", button: "Image", path: "/Image" },
    {
      heading: filteimagecategory.length,
      content: "Image Category  ",
      button: "Image Category",
      path: "/Image Category",
    },
    { heading: "45", content: "ios", button: "ios", path: "/ios" },
    { heading: "78", content: "Android ", button: "Android", path: "/Android" },
  ];

  return (
    <Box
      sx={{
        maxHeight: "50rem",
        overflowY: "auto",
        padding: "2rem 1rem 3rem",
      }}
    >
      <TitleHeader title="Dashboard" />
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={16} md={3} sm={16} key={index}>
            <Box elevation={4} className="dashboardbox">
              <Typography variant="h5" component="h1" gutterBottom>
                {item.heading}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {item.content}
              </Typography>
              <button
                onClick={() => handleButtonClick(item.path)}
                style={buttonStyle}
                variant="contained"
                color="primary"
              >
                {item.button}
              </button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Dashboard;
