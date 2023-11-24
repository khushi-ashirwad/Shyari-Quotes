import axios from "axios";
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FAILER,
  GET_CATEGORY,
  UPDATE_CATEGORY,
} from "../constants";

const url = process.env.REACT_APP_URL;
export const addCategory = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "/category/add", data);
    dispatch({ type: ADD_CATEGORY, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
  }
};

export const getCategory = () => async (dispatch) => {
  try {
    const response = await axios.get(url + "/category/get");
    // console.log("action", response.data);
    dispatch({ type: GET_CATEGORY, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
  }
};

export const updateCategory = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(url + "/category/update/" + id, data);
    dispatch({ type: UPDATE_CATEGORY, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(url + "/category/delete/" + id);
    dispatch({ type: DELETE_CATEGORY, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
  }
};
