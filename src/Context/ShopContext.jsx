import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import productImages from "../Components/Assets/productImages";

export const ShopContext = createContext(null);

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000/api";

const initialcart = () => {
  const cart = {};
  const getItem = JSON.parse(localStorage.getItem("cart_items"));
  if (getItem === undefined || getItem === null) {
    return cart;
  }
  getItem.forEach((item) => {
    cart[item.id] = (cart[item.id] || 0) + 1;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState(initialcart());
  const [theme, settheme] = useState("light");
  const [user, setUser] = useState(false);

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

  const addCart = (itemId, selectedSize) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    const item = all_product.find((e) => e.id === Number(itemId));
    const itemWithSize = { ...item, size: selectedSize };
    const getItem = JSON.parse(localStorage.getItem("cart_items")) || [];
    const setid = [...getItem, itemWithSize];
    localStorage.setItem("cart_items", JSON.stringify(setid));
  };
  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
    const getItem = JSON.parse(localStorage.getItem("cart_items")) || [];
    const removeItems = getItem.filter((e) => e.id === itemId);
    const addItem = getItem.filter((e) => e.id !== itemId);
    removeItems.splice(-1);
    const overAll = removeItems.concat(addItem);
    localStorage.setItem("cart_items", JSON.stringify(overAll));
  };
  const totalcartitems = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCount += cartItems[item];
      }
    }
    return totalCount;
  };
  const totalamount = () => {
    let totalvalue = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let totalInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (totalInfo) totalvalue += totalInfo.new_price * cartItems[item];
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
