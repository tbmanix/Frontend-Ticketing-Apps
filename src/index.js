import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import stores from "./stores";

const { store, persistor } = stores;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.Fragment>
  //   <App />
  // </React.Fragment>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
