import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reducer from "./reducers/index.js";
import { configureStore } from "@reduxjs/toolkit";
import { compose, applyMiddleware } from "redux";
import App from "./App.js";
import thunk from "redux-thunk";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e.message);
  }
};
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    console.log("loadState=>", JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e.message);
    return undefined;
  }
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: reducer,
  preloadedState: loadFromLocalStorage(),
  middlewear: composeEnchancer(applyMiddleware(thunk)),
});
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
