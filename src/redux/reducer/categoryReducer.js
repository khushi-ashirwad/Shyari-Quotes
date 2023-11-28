import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  FAILER,
  GET_CATEGORY,
  UPDATE_CATEGORY,
} from "../constants";
import { intialvalue } from "../intialvalue";

export const categoryRducer = (state = intialvalue, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        error: null,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case FAILER:
      return {
        ...state,
        success: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
