import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    console.log(item);
    let isExist = false;
    cart.map((c_item) => {
      if (c_item.id == item.id) isExist = true;
    });
    if (!isExist) {
      setCart([...cart, item]);
    }
  };

  const removeCart = (id) => {
    const removedCart = cart.filter((item) => item.id !== id);
    setCart(removedCart);
  };
  
  return (
    <CartContext.Provider value={{ cart, addCart,removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
