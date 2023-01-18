import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = true;
  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
