import React, { useState } from "react";
import "./News.scss";
import { toast } from "react-toastify";
import axios from "axios";

function News() {
  const [data, setData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    if (!data.email) {
      errors.push("Please Enter the Email");
      toast.error("Please Enter the Email");
    }
    if (errors.length > 0) {
      return;
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
      .post("https://kalaithoughts.infinityfreeapp.com/php/submail.php", data, {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      })
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          toast.success(response.data.info);
          setData({
            email: "",
          });
        } else toast.error(response.data.info);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        toast.error("Error posting data");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="news-letter">
      <h2 className="newsletter-h2">Get Exclusive offers on your Mail</h2>
      <p className="newsletter-p">
        Subscribe For our Newsletter to get updates
      </p>
      <div className="input-box">
        <input
          type="email"
          className="input-box-input"
          placeholder="Enter your Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <button onClick={handleSubmit} className="input-box-button">
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
    </div>
  );
}

export default News;
