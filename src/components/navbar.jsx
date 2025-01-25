import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useAuth } from "../context/auth-context";
import "./navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar custom-navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        {user ? (
          <div className="user-info">
            <span>Welcome, {user}</span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className="login-button">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
