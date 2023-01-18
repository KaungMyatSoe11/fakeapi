import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
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
    if (checkLogin(userName, password)) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, errorMsg }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
