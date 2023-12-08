import { combineReducers } from "redux";
import { categoryRducer } from "./reducer/categoryReducer";
import { contentReducer } from "./reducer/QuotesReducer";
import { imageReducer } from "./reducer/ImageReducer";
import { shayariReducer } from "./reducer/ShayariReducer";

export default combineReducers({
  categoryRducer,
  contentReducer,
  imageReducer,
  shayariReducer
});
