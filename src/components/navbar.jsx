import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"; // Ahora debería funcionar correctamente.
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar custom-navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;



