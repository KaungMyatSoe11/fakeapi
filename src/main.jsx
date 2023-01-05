import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import BookProvider from "./context/BookProvider";
import CartProvider from "./context/CartProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BookProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </BookProvider>
);
