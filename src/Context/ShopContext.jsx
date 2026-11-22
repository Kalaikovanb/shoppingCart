import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import productImages from "../Components/Assets/productImages";

export const ShopContext = createContext(null);

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000/api";

function authHeaders() {
  const token = sessionStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [theme, settheme] = useState("light");
  const [user, setUser] = useState(!!sessionStorage.getItem("token"));

  const switchMode = () => {
    settheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    axios
      .get(`${API_BASE}/products`)
      .then((res) => {
        const products = res.data.map((p) => ({
          id: p.id,
          name: p.name,
          category: p.category,
          image: productImages[p.id],
          new_price: p.newPrice,
          old_price: p.oldPrice,
        }));
        setAllProduct(products);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const refreshCart = useCallback(() => {
    if (!sessionStorage.getItem("token")) {
      setCartItems({});
      return;
    }
    axios
      .get(`${API_BASE}/cart`, { headers: authHeaders() })
      .then((res) => {
        const asMap = {};
        res.data.forEach((item) => {
          asMap[item.productId] = item.qty;
        });
        setCartItems(asMap);
      })
      .catch((error) => console.error("Error loading cart:", error));
  }, []);

  useEffect(() => {
    refreshCart();
  }, [user, refreshCart]);

  const addCart = (itemId) => {
    axios
      .post(`${API_BASE}/cart`, { productId: Number(itemId), qty: 1 }, { headers: authHeaders() })
      .then(refreshCart)
      .catch((error) => console.error("Error adding to cart:", error));
  };

  const removeCart = (itemId) => {
    axios
      .delete(`${API_BASE}/cart/${itemId}`, { headers: authHeaders() })
      .then(refreshCart)
      .catch((error) => console.error("Error removing from cart:", error));
  };

  const totalcartitems = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) totalCount += cartItems[item];
    }
    return totalCount;
  };

  const totalamount = () => {
    let totalvalue = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = all_product.find((p) => p.id === Number(item));
        if (product) totalvalue += product.new_price * cartItems[item];
      }
    }
    return totalvalue;
  };

  const contextValue = {
    user,
    setUser,
    all_product,
    cartItems,
    totalcartitems,
    addCart,
    removeCart,
    totalamount,
    theme,
    switchMode,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
