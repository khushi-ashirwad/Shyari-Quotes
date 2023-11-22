import { ADD_CATEGORY, FAILER, GET_CATEGORY } from "../constants";
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
        console.log("reducer",action.payload);
        return{
          ...state,
          category:action.payload,
          error:null
        }
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

