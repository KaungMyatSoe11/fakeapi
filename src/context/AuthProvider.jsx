import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isChecked, setIsChecked] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");

  const checkLogin = (userName, password) => {
    if (userName == "admin" && password == "123") {
      setErrorMsg("");
      return true;
    }
    setErrorMsg("Incorrect UserName and Password");
    return false;
  };

  const login = (userName, password) => {
    console.log(userName,password);
    if (checkLogin(userName, password)) {
      const k = { userName, password };
      localStorage.setItem("au", JSON.stringify(k));
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, login,isChecked,setIsChecked, errorMsg, setErrorMsg }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
