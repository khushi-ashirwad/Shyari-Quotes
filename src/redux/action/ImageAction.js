import axios from "axios";
import { ADD_IMAGE, FAILER, GET_IMAGE } from "../constants";

const url = process.env.REACT_APP_URL;
export const addImage = (data) => async (dispatch) => {
  try {
    console.log("action call", data);
    const response = await axios.post(url + "/image", data);
    dispatch({ type: ADD_IMAGE, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
  }
};

export const getImage = () => async (dispatch) => {
  try {
    const response = await axios.get(url + "/image");
    dispatch({ type: GET_IMAGE, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
  }
};
