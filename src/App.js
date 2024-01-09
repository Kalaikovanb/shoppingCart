import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Register from "./Components/Register/Register";
import { useContext, useEffect } from "react";
import ThemeContext from "./Context/themecontexts";
import Login from "./Components/Login/login";
import Otp from "./Components/OTP/Otp";
import Example from "./Components/Modal/Modal";

function App() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#0d0620";
    } else {
      document.body.style.backgroundColor = "#fff";
    }

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [theme]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Example />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
