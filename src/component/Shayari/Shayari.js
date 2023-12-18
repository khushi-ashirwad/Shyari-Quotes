import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import TitleHeader from "../Global/TitleHeader";
import Manage from "../ManageTable/quotes&shayari";
import { BasicContext } from "../../context/BasicProvider";
import Addshayariquotes from "../Modal/Addshayari&quotes";
import { GetShayari } from "../Global/Getcategory";
import { getShayari } from "../../redux/action/ShayatiAction";

const Shayari = () => {
  const { handleShow, dataFetched, setDataFetched } = useContext(BasicContext);
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
    marginTop: "-3.5rem",
  };
  const currentPath = window.location.pathname;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!dataFetched) {
      dispatch(getShayari());
      setDataFetched(true);
    }
  }, [dispatch, dataFetched, setDataFetched]);
  const content = GetShayari();
  return (
    <Box
      className="full-screen"
      sx={{
        padding: "2rem 1rem 3rem",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        width: "140rem",
      }}
    >
      <TitleHeader title="Manage Shayari" />
      <Box style={containerStyle}>
        <button style={buttonStyle} onClick={handleShow}>
          Add Shayari
        </button>
      </Box>
      <Manage content={content} />
      <Addshayariquotes currentPath={currentPath} />
    </Box>
  );
};

export default Shayari;
