import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Backmoon from "../Backset/Backmoon";

function Register() {
  const [data, setData] = useState({
    user_name: "",
    password: "",
    c_password: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    if (!data.user_name) {
      errors.push("Please enter the User name");
      toast.error("Please enter the User name");
    }
    if (!data.password) {
      errors.push("Please enter the Password");
      toast.error("Please enter the Password");
    }
    if (!data.email) {
      errors.push("Please enter the Email");
      toast.error("Please enter the Email");
    }
    if (!data.c_password) {
      errors.push("Please Confirm Password");
      toast.error("Please Confirm Password");
    }
    if (data.c_password !== data.password) {
      errors.push("Password must be the same");
      toast.error("Password must be the same");
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
    setLoading(true);

    axios
      .post(
        "https://kalaithoughts.infinityfreeapp.com/php/register.php",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          responseType: "json",
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.status) {
          toast.success(response.data.data);
          sessionStorage.setItem(
            "Register",
            JSON.stringify(response.data.result.email)
          );
          setData({
            user_name: "",
            password: "",
            c_password: "",
            email: "",
          });
          if (response.data.otp) navigate("/otp");
          else navigate("/login");
        } else toast.error(response.data.data);
      })
      .catch((error) => console.error("Error posting data:", error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="register-container">
      <Backmoon />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={data.user_name}
          onChange={handleChange}
        />

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

        <label>Confirm Password</label>
        <input
          type="password"
          name="c_password"
          value={data.c_password}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
        <Link to="/login" className="login-link">
          <div className="login-link">
            <p>Already have an account? Login here.</p>
          </div>
        </Link>
      </form>
    </div>
  );
}

export default Register;
