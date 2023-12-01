import axios from "axios";
import { ADD_CONTENT, DELETE_CONTENT, FAILER, GET_CONTENT, UPDATE_CONTENT, DAILY_CONTENT } from "../constants";
import {
  showRemoveAlert2, showSuccessAlert, showDeleteDataAlert,
} from "../../component/Global/Validation";

const url = process.env.REACT_APP_URL;

export const addContent = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "/quotesshayari/add", data);
    dispatch({ type: ADD_CONTENT, payload: response.data });
    showSuccessAlert(response.data.message)
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error.message)
  }
};

export const getContent = () => async (dispatch) => {
  try {
    const response = await axios.get(url + "/content/get");
    dispatch({ type: GET_CONTENT, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
  }
};

export const deleteContent = (id) => async (dispatch) => {
  try {
    showDeleteDataAlert('Are you sure you want to delete this category?', async () => {
      const response = await axios.delete(url + "/content/delete/" + id);
      dispatch({ type: DELETE_CONTENT, payload: response.data });
      showRemoveAlert2(response.data.message);
      dispatch(getContent())
    });
   
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error)
  }
};

export const updateContent = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(url + `/content/update/${id}`, data);
    dispatch({ type: UPDATE_CONTENT, payload: response.data });
    showSuccessAlert(response.data.message)
  } catch (error) {
    dispatch({ type: UPDATE_CONTENT, payload: error });
    showRemoveAlert2(error)

  }
}

export const addDailycontent = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "/dailycontent", data);
    dispatch({ type: DAILY_CONTENT, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
  }
};
