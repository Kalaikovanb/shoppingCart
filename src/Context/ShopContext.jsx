import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const initialcart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  const getItem = JSON.parse(localStorage.getItem("cart_items"));
  if (getItem === (undefined || null)) {
    return cart;
  } else {
    for (const item in cart) {
      for (const index in getItem) {
        if (getItem[index].id === Number(item)) {
          cart[item] += 1;
        }
      }
    }
    return cart;
  }
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(initialcart());
  const [theme, settheme] = useState("light");
  const [user, setUser] = useState(false);
  const switchMode = () => {
    settheme(theme === "light" ? "dark" : "light");
  };

  // setUser(JSON.parse(sessionStorage.getItem("user")));
  const addCart = (itemId, selectedSize) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    const item = all_product.find((e) => e.id === Number(itemId));
    const itemWithSize = { ...item, size: selectedSize };
    const getItem = JSON.parse(localStorage.getItem("cart_items")) || [];
    const setid = [...getItem, itemWithSize];
    localStorage.setItem("cart_items", JSON.stringify(setid));
  };
  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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
        totalvalue += totalInfo.new_price * cartItems[item];
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
