import React from "react";
import "./Footer.scss";
import footer_img from "../Assets/logo_big.png";
import insta from "../Assets/instagram_icon.png";
import pin from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function Footer() {
  const notice = () => {
    toast.info("Website is Under Development");
  };
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_img} alt="Footer" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="footer-logo-para">SHOPPER</p>
        </Link>
      </div>
      <ul className="footer-links">
        <li onClick={notice}>Company</li>
        <li onClick={notice}>Products</li>
        <li onClick={notice}>Offices</li>
        <li onClick={notice}>About</li>
        <li onClick={notice}>Contact</li>
      </ul>
      <ToastContainer
        position="bottom-center"
        autoClose={700}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="social-icon">
        <div className="insta">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" />
          </a>
        </div>
        <div className="pinterest">
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pin} alt="Pintrest" />
          </a>
        </div>
        <div className="whatsapp">
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>
        </div>
      </div>
      <div className="copyrights">Copyright @ 2023 - All Rights Reserved</div>
    </div>
  );
}

export default Footer;
