import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Favorite from "../pages/Favorite";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import ProtectedLayout from "../components/ProtectedLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
      <Route path="/login" element={<Login />} />

      {/* <Route path="/favorite" element={<Favorite />} /> */}
      {/* <Route
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
        path="/cart"
      />
      <Route
        element={
          <ProtectedRoute>
            <Favorite />
          </ProtectedRoute>
        }
        path="/favorite"
      /> */}

      <Route element={<ProtectedLayout />}>
        <Route path="cart" element={<Cart />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
};

export default Router;
