import {
  ADD_CONTENT,
  FAILER,
  GET_CONTENT,
} from "../constants";
import { intialvalue } from "../intialvalue";

export const contentReducer = (state = intialvalue, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case GET_CONTENT:
      return {
        ...state,
        quotescontent: action.payload,
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
