import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "./components/Toolbar/ToolbarContainer";
import Body from "./components/Body/BodyContainer";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toolbar></Toolbar>
      <Body></Body>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
