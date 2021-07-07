import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { smurfsReducer } from "./reducers/smurfsReducer";

const store = createStore(smurfsReducer, applyMiddleware(thunk))
console.log("This is state from index.js", store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
