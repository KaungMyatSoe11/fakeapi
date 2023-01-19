import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { isAuth, login } = useContext(AuthContext);
  const k = JSON.parse(localStorage.getItem("au"));

  login(k.username,k.password)
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
