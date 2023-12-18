import axios from "axios";
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FAILER,
  GET_CATEGORY,
  UPDATE_CATEGORY,
} from "../constants";
import { showRemoveAlert2, showSuccessAlert, showDeleteDataAlert } from "../../component/Global/Validation";

const url = process.env.REACT_APP_URL;
export const addCategory = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "/category", data);
    dispatch({ type: ADD_CATEGORY, payload: response.data });
    showSuccessAlert(response.data.message)
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error)
  }
};

export const getCategory = () => async (dispatch) => {
  try {
    const response = await axios.get(url + "/category");
    dispatch({ type: GET_CATEGORY, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });

  }
};

export const updateCategory = (id, data) => async (dispatch) => {
  
  try {
    console.log("value current",id);
    const response = await axios.put(url + "/category/" + id, data);
    dispatch({ type: UPDATE_CATEGORY, payload: response.data });
    showSuccessAlert(response.data.message)
    console.log("value changed",id);

  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error)
  }

};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    showDeleteDataAlert('Are you sure you want to delete this category?', async () => {
      const response = await axios.delete(url + "/category/" + id);
      dispatch({ type: DELETE_CATEGORY, payload: response.data });
      showRemoveAlert2(response.data.message);
      dispatch(getCategory())
    });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error)
  }
};
