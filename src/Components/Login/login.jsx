import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import Backmoon from "../Backset/Backmoon";
import { ShopContext } from "../../Context/ShopContext";

function Login() {
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  const { setUser } = useContext(ShopContext);

  const nav = useNavigate();

  // useEffect(() => {
  //   sessionStorage.clear();
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];

    if (!data.email && !data.password) {
      errors.push("Please Enter the Email and Password");
      toast.error("Please Enter the Email and Password");
    } else if (!data.email) {
      errors.push("Please Enter the Email");
      toast.error("Please Enter the Email");
    } else if (!data.password) {
      errors.push("Please Enter the Password");
      toast.error("Please Enter the Password");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(data.email);
    if (!isValid) {
      errors.push("Please Enter the Valid Email");
      toast.error("Please Enter the Valid Email");
    }

    if (errors.length > 0) {
      return;
    }

    const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000/api";
    axios
      .post(`${API_BASE}/auth/login`, { email: data.email, password: data.password })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        setUser(true);
        toast.success("Logged in successfully");
        nav("/");
        setData({
          password: "",
          email: "",
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.error || "Login failed");
      });
  };

  return (
    <div className="login-setup">
      <Backmoon />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
          <Link to="/register" className="register-link">
            Don't have an Account, Please Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
