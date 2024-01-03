import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FiMoon, FiSun } from "react-icons/fi";
import ThemeContext from "../../Context/themecontexts";
import { BsCartCheckFill } from "react-icons/bs";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { theme, setTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(theme === "light");
  const menuRef = useRef();
  const mobile_res = useRef();
  const burger = useRef();
  const { totalcartitems } = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = () => {
    setChecked((prevChecked) => !prevChecked);
    setTheme(checked ? "dark" : "light");
  };

  useEffect(() => {
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("menu", menu);
  }, [menu]);
  const nav_open = (e) => {
    mobile_res.current.classList.toggle("mobile_response");
    // e.target.classList.toggle("visible");
    burger.current.classList.toggle("activate");
  };
  return (
    <div className="navbar">
      <div className="navbar-cart-img">
        <img src={logo} alt="Shoppy" />
        <Link
          onClick={() => {
            setMenu("shop");
          }}
          to="/shoppingCart"
          style={{ textDecoration: "none" }}
        >
          <p>SHOPPER</p>
        </Link>
      </div>
      {/* <img onClick={nav_open} className='nav-dropdown-img' src={drop} alt="" /> */}
      <ul ref={menuRef} className="nav-options">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/shoppingCart" style={{ textDecoration: "none" }}>
            Home
          </Link>{" "}
          {menu === "shop" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/shoppingCart/men" style={{ textDecoration: "none" }}>
            Men
          </Link>{" "}
          {menu === "men" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/shoppingCart/women" style={{ textDecoration: "none" }}>
            Women
          </Link>{" "}
          {menu === "women" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/shoppingCart/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="login-cart">
        <Link to="/shoppingCart/register">
          <button>Login</button>
        </Link>
        <Link
          to="/shoppingCart/cart"
          onClick={() => window.scrollTo(0, 0)}
          style={{ textDecoration: "none" }}
        >
          <div className="cart-img">
            {/* <img src={cart_icon} alt="" /> */}
            {/* <TiShoppingCart /> */}
            <BsCartCheckFill />

            <div className="cart-img-count">{totalcartitems()}</div>
          </div>
        </Link>
      </div>
      {/* <ReactSwitch onChange={switchMode}/> */}
      <div className="theme-mode">
        <input
          type="checkbox"
          id="icon-find"
          checked={checked}
          onChange={toggle}
        />
        <label htmlFor="icon-find">
          <div className="icon">
            <FiMoon />
          </div>
          <div className="icon">
            <FiSun />
          </div>
        </label>
      </div>

      <div
        onClick={nav_open}
        ref={burger}
        id="butt"
        className="nav-dropdown-img"
        alt=""
      >
        <div className="burger-menu">
          <div className="line first-line"></div>
          <div className="line second-line"></div>
          <div className="line third-line"></div>
        </div>
      </div>
      <ul ref={mobile_res} className="nav-options nav-options-visible">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/shoppingCart" style={{ textDecoration: "none" }}>
            Home
          </Link>{" "}
          {menu === "shop" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/shoppingCart/men" style={{ textDecoration: "none" }}>
            Men
          </Link>{" "}
          {menu === "men" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/shoppingCart/women" style={{ textDecoration: "none" }}>
            Women
          </Link>{" "}
          {menu === "women" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/shoppingCart/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
