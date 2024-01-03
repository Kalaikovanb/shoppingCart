import "./App.css";
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
import Register from "./Components/Register.jsx/Register";
// import { ShopContext } from "./Context/ShopContext";
import { useContext, useEffect } from "react";
import ThemeContext from "./Context/themecontexts";

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
    <div className="App" id={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/shoppingCart" element={<Shop />} />
          {/* <Route path="/login" element={<LoginSignup/>}/> */}
          {/* <Route path="/register" element={<LoginSignup/>}/> */}
          <Route
            path="/shoppingCart/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/shoppingCart/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/shoppingCart/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/shoppingCart/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/shoppingCart/cart" element={<Cart />} />
          <Route path="/shoppingCart/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
