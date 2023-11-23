import axios from "axios";
import { ADD_CONTENT, FAILER, GET_CONTENT} from "../constants";

const url = process.env.REACT_APP_URL;
export const addContent = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "/quotesshayari/add", data);
    dispatch({ type: ADD_CONTENT, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILER, payload: error });
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

