import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import "./index.css";
import "./index2.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
