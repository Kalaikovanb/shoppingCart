import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Otp.scss";
import Backmoon from "../Backset/Backmoon";

function Otp() {
  const [otp, setOtp] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);
  const nav = useNavigate();
  useEffect(() => {
    inputs.current[0].focus();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    if (value.length >= event.target.maxLength) {
      focusNextInput(index);
      setFocusedIndex(index + 1);
    }
  };

  const focusNextInput = (index) => {
    if (inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const verifyOTP = () => {
    let enteredOTP = "";
    const otpInputs = document.querySelectorAll(".otp-input");

    otpInputs.forEach((input) => {
      enteredOTP += input.value;
    });

    setOtp(JSON.stringify(sessionStorage.getItem("Register")));
    setLoading(true);

    axios
      .post(`https://kalaithoughts.infinityfreeapp.com/php/otp.php`, {
        data: {
          otp: enteredOTP,
          email: otp,
        },
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      })
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          toast.success(response.data.info);
          sessionStorage.setItem("user", JSON.stringify(response.data.result));
          nav("/");
        } else {
          toast.error(response.data.info);
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
    setLoading(false);
  };

  return (
    <div className="otp-main">
      <Backmoon />
      <div className="otp-generator ">
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
        <h3>OTP Verification</h3>
        <p>Check your mail and Enter the OTP</p>
        <div className="input-box">
          <div className="input-four-boxes">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type="number"
                maxLength="1"
                className={
                  focusedIndex === index ? "otp-input focused" : "otp-input"
                }
                ref={(input) => (inputs.current[index] = input)}
                onChange={(event) => handleInputChange(event, index)}
                onKeyUp={(event) => {
                  if (
                    event.keyCode === 8 &&
                    inputs.current[index].value.length === 0 &&
                    index > 0
                  ) {
                    inputs.current[index - 1].focus();
                    setFocusedIndex(index - 1);
                  }
                }}
              />
            ))}
          </div>
          <button onClick={verifyOTP}>
            {loading ? "Verifying" : "Verify OTP"}
          </button>
          <div className="hr-tags">
            <hr />
            <span> OR </span>
          </div>

          <Link to="/login" className="link">
            <button id="login-button">Login</button>
          </Link>
          <Link to="/register" className="link">
            <button id="register-button">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Otp;
