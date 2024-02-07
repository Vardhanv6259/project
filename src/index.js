import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client" instead of "react-dom"
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Routes from "react-router-dom";
import UserLogin from "./components/UserLogin";
import Register from "./components/UserRegistration";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);
