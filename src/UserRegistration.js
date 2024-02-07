import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserRegistration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [isMerchant, setIsMerchant] = useState(false);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeMerchant = (e) => {
    setIsMerchant(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        email,
        password,
        phone,
        gender,
        isMerchant,
      });
      console.log(response.data);
      // Redirect or perform any other action upon successful registration
      alert("successfully registered");
    } catch (error) {
      console.error("Registration failed:", error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Register</h1>
          <div className="input-field">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleChangeUsername}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={handleChangePhone}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
              required
            />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Re-enter Password" required />
          </div>
          <div className="gend">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleChangeGender}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleChangeGender}
              />
              Female
            </label>
          </div>
          <div className="verify-merchant">
            <center>
              <input
                type="checkbox"
                checked={isMerchant}
                onChange={handleChangeMerchant}
              />
              Merchant?
            </center>
          </div>
          <button type="submit" className="btn">
            SignUp
          </button>
          <div className="register-link">
            <p>Already have an account!</p>
            <Link to="/">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
