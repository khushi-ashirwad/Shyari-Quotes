import { ADD_IMAGE, GET_IMAGE } from "../constants";
import { intialvalue } from "../intialvalue";

export const imageReducer = (state = intialvalue, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case GET_IMAGE:
      return {
        ...state,
        image: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
