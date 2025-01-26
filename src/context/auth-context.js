import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // manage users info
  const navigate = useNavigate();

  const login = (username) => {
    setUser(username); // set user name after login successfully
    navigate("/"); // jump to shop after login
  };

  const logout = () => {
    setUser(null); // clear user info
    navigate("/login"); // jump to login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
