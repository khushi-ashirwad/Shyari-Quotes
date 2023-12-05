import {
  ADD_CONTENT,
  DAILY_CONTENT,
  DELETE_CONTENT,
  FAILER,
  GET_CONTENT,
  GET_DAILY_CONTENT,
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
    case DELETE_CONTENT:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case DAILY_CONTENT:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case GET_DAILY_CONTENT:
      return {
        ...state,
        dailyContent: action.payload,
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
