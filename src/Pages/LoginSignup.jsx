import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CSS/LoginSignup.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [data, setData] = useState({
    user_name: "",
    password: "",
    c_password: "",
    id: "",
  });

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
    if (!data.id) {
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

    if (errors.length > 0) {
      // toast.error(` ${errors.join('\n')}`);
      return;
    }
    setData({
      user_name: "",
      password: "",
      c_password: "",
      id: "",
    });
  };
  return (
    <div className="login-signup">
      <div className="register-container">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
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
          <hr />
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={data.user_name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />

          <label>Email</label>
          <input
            type="email"
            name="id"
            value={data.id}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="c_password"
            value={data.c_password}
            onChange={handleChange}
            placeholder="Confirm Your Password"
          />
          <button type="submit">Submit</button>
        </form>
        <Link to="/register" className="login-link">
          Already have an account? Login here.
        </Link>
      </div>
    </div>
  );
};

export default LoginSignup;
