import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

// console.log("After STATE", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode >
    <BrowserRouter basename = "/habbit_tracker_react">
    <Provider store={store} >
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
