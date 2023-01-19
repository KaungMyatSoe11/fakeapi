import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ProtectedLayout = () => {
  const { isAuth, login, errorMsg, setIsChecked, isChecked } = useContext(
    AuthContext
  );
  //   console.log(localStorage.getItem("au"));
  const k = JSON.parse(localStorage.getItem("au"));
  useEffect(() => {
    console.log(k);
    if (k) {
      login(k.userName, k.password);
      setIsChecked(true);
    }
  }, []);

  if (!k && !isAuth && !isChecked) {
    if(errorMsg){

        return <Navigate to={"/login"} />;
    }
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
