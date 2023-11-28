import { combineReducers } from "redux";
import { categoryRducer } from "./reducer/categoryReducer";
import { contentReducer } from "./reducer/ContentReducer";
import { imageReducer } from "./reducer/ImageReducer";

export default combineReducers({
  categoryRducer,
  contentReducer,
  imageReducer
});
