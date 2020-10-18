import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode className="body-background">
    <h1 className="heading">Tic Tac Toe</h1>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
