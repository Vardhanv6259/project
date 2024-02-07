import React from "react";
import ReactDOM from "react-dom"; // Import from "react-dom" instead of "react-dom/client"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import UserLogin from "./components/UserLogin";
import UserRegistration from "./components/UserRegistration";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/userregistration" element={<UserRegistration />} />
        {/* Add route for forgot password if needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
