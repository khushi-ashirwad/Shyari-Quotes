import {
  DELETE_SHAYARI,
  FAILER,
  SHAYARI_ADD,
  SHAYARI_GET,
  UPDATE_SHAYARI,
} from "../constants";
import { intialvalue } from "../intialvalue";

export const shayariReducer = (state = intialvalue, action) => {
  switch (action.type) {
    case SHAYARI_ADD:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case SHAYARI_GET:
      return {
        ...state,
        shayaricontent: action.payload,
        error: null,
      };
    case UPDATE_SHAYARI:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case DELETE_SHAYARI:
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
