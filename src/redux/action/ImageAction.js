import axios from "axios";
import { ADD_IMAGE, FAILER, GET_IMAGE, DELETE_IMAGE, UPDATE_IMAGE } from "../constants";
import { showRemoveAlert2, showSuccessAlert, showDeleteDataAlert } from "../../component/Global/Validation";

const url = process.env.REACT_APP_URL;

export const addImage = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "/image", data);
    dispatch({ type: ADD_IMAGE, payload: response.data });
    showSuccessAlert(response.data.message)
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error)
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

export const deleteImage = (id) => async (dispatch) => {
  try {
    showDeleteDataAlert('Are you sure you want to delete this category?', async () => {
      const response = await axios.delete(url + "/image/" + id);
      dispatch({ type: DELETE_IMAGE, payload: response.data });
      showRemoveAlert2(response.data.message)
      dispatch(getImage())

    });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error)
  }
};

export const updateImage = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(url + "/image/" + id, data);
    dispatch({ type: UPDATE_IMAGE, payload: response.data });
    showSuccessAlert(response.data.message)
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error)

  }
};
