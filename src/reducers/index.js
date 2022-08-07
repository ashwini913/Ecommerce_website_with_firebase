import products_reducer from "./products_reducer.js";
import search_text_reducer from "./search_text_reducer.js";
import cart_reducer from "./cart_reducer.js";
import user_reducer from "./user_reducer.js";
import { combineReducers } from "redux";

const reducer = combineReducers({
  products_reducer: products_reducer,
  search_text_reducer: search_text_reducer,
  //cart_reducer: cart_reducer,
  user_reducer: user_reducer,
});

export default reducer;
