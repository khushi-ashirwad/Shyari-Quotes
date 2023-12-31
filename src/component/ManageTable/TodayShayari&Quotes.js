import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Getcategory from "../Global/Getcategory";
import { useDispatch, useSelector } from "react-redux";
import { addDailyquotes, getDailycontent } from "../../redux/action/QuoteAction";
import { addDailyshayari } from "../../redux/action/ShayatiAction";
import Select from 'react-select';

const TodayShayariQuotes = () => {
  const [dailycontent, setDailycontent] = useState({
    category: "",
    content: "",
    type: "dailycontent",
  });
  const category = Getcategory();
  const currentPath = window.location.pathname;

  const handleInputChange = (e) => {
    setDailycontent({
      ...dailycontent,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (currentPath === "/Today%20Quotes") {
      dispatch(addDailyquotes(dailycontent)).then(() => {
        setDailycontent({});
      });
    } else {
      dispatch(addDailyshayari(dailycontent)).then(() => {
        setDailycontent({});
      });
    }
  };

  useEffect(() => {
    dispatch(getDailycontent());
  }, [dispatch]);

  const { dailyContent } = useSelector((state) => state.contentReducer);

  return (
    <>
      <Box sx={{ padding: "2rem 1rem 3rem" }}>
        <Typography variant="h5" sx={{ fontWeight: "500" }}>
          {currentPath === "/Today%20Quotes"
            ? "Today Quotes"
            : "Today Shayari"}
        </Typography>
        <Box sx={{ margin: "2rem" }}>
          <Typography variant="h6">Developers </Typography>
          <br />
          <input
            type="text"
            placeholder=" Developers name"
            style={{
              marginBottom: "1rem",
              backgroundColor: "#EDEFF5",
              padding: "1rem",
              border: "1px solid black",
              width: "70rem",
              height: "4rem",
            }}
          />
          <br />
          <Typography variant="h6">Category </Typography>
          <br />
          <KeyboardArrowDownIcon 
          sx={{
            marginLeft:"68rem",
            marginBottom:"-3.5rem"
            }}/>
          <Select
            options={category
              .filter(
                (category) =>
                  (currentPath === '/Today%20Quotes' &&
                    category.type === 'quotes' &&
                    category.isdisable === true) ||
                  (currentPath !== '/Today%20Quotes' &&
                    category.type === 'shayari' &&
                    category.isdisable === true)
              )
              .map((option) => ({
                label: option.name,
                value: option._id,
              }))}
            // onChange={handleChangeContent}
            styles={{
              control: (provided) => ({
                ...provided,
                height: "2.5rem",
                backgroundColor: "#EDEFF5",
                border: "1px solid black",
                borderRadius: "1px",
              }),
              menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
              menu: (provided) => ({
                ...provided,
                maxHeight: "200px",
                overflowY: "auto",
              }),
            }}
            menuPortalTarget={document.body}
          />
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            {currentPath === "/Today%20Quotes"
              ? "Enter Your Quotes"
              : "Enter Your Shayari"}
          </Typography>
          <textarea
            style={{ padding: "2rem" }}
            rows="12"
            cols="142"
            name="content"
            value={dailycontent.content}
            onChange={handleInputChange}
          />
        </Box>
        <Button
          sx={{ margin: " 0rem 2rem " }}
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#59167C" }}
          onClick={handleSubmit}
        >
          Save {currentPath === "/Today%20Quotes" ? "Quotes" : "Shayari"}
        </Button>
      </Box>
      <Box sx={{ flex: 1, padding: "11rem 1rem" }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "1rem 1rem",
            width: "22rem",
            border: "1px solid #000",
            borderBottom: "none",
          }}
        >
          <Typography variant="h5" sx={{ alignItems: "center" }}>
            Today {currentPath === "/Today%20Quotes" ? "Quotes" : "Shayari"} - Of
            The Day
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid #000",
            width: "22rem",
            height: "15rem",
            backgroundColor: "#FBFBFB",
          }}
        >
          <Typography sx={{ margin: "1.5rem" }}>
            {currentPath === "/Today%20Quotes" ? (
             Array.isArray(dailyContent) && dailyContent.length > 0 ? (
                dailyContent
                  .filter((value) => value.category.type === "quotes")
                  .map((value) => (
                    <p style={{ wordWrap: "break-word" }}>{value.content}</p>
                  ))
              ) : (
                <p style={{ wordWrap: "break-word" }}>
                  Yet today content not added
                </p>
              )
            ) :  Array.isArray(dailyContent) && dailyContent.length > 0 ? (
              dailyContent
                .filter((value) => value.category.type === "shayari")
                .map((value) => (
                  <p style={{ wordWrap: "break-word" }}>{value.content}</p>
                ))
            ) : (
              <p style={{ wordWrap: "break-word" }}>
                Yet today content not added
              </p>
            )}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TodayShayariQuotes;
