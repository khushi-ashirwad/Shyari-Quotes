import axios from "axios";
import {
  DELETE_SHAYARI,
  FAILER,
  SHAYARI_ADD,
  SHAYARI_GET,
  UPDATE_SHAYARI,
  DAILY_CONTENT
} from "../constants";
import {
  showDeleteDataAlert,
  showRemoveAlert2,
  showSuccessAlert,
} from "../../component/Global/Validation";
const url = process.env.REACT_APP_URL;

export const addShayari = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "/shayari", data);
    dispatch({ type: SHAYARI_ADD, payload: response.data });
    showSuccessAlert(response.data.message);
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error);
  }
};

export const getShayari = () => async (dispatch) => {
  try {
    const response = await axios.get(url + "/shayari");
    dispatch({ type: SHAYARI_GET, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
  }
};

export const updateShayari = (id,data) => async (dispatch) => {
  try {
    const response = await axios.put(url + "/shayari/" + id,data);
    dispatch({ type: UPDATE_SHAYARI, payload: response.data });
    showSuccessAlert(response.data.message);
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error);
  }
};

export const deleteShayari = (id) => async (dispatch) => {
  try {
    showDeleteDataAlert(
      "Are you sure you want to delete this category?",
      async () => {
        const response = await axios.delete(url + "/shayari/" + id);
        dispatch({ type: DELETE_SHAYARI, payload: response.data });
        showRemoveAlert2(response.data.message);
        dispatch(getShayari());
      }
    );
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
  }
};


export const addDailyshayari = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "/dailyshayari", data);
    dispatch({ type: DAILY_CONTENT, payload: response.data });
    showRemoveAlert2(response.data.message)
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
    showRemoveAlert2(error)
  }
};
