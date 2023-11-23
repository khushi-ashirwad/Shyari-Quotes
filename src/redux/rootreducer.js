import { combineReducers } from "redux";
import { categoryRducer } from "./reducer/categoryReducer";
import { contentReducer } from "./reducer/ContentReducer";

export default combineReducers({
  categoryRducer,
  contentReducer,
});
