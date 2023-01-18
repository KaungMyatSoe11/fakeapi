import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Favorite from "../pages/Favorite";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
        path="/cart"
      />
    </Routes>
  );
};

export default Router;
