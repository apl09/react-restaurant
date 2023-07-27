import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav className="header">               
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/menu">Menu</Link>
          </span>
          <span>
            <Link to="/reserve">Reserve</Link>
          </span>        
      </nav>      
    </div>
  );
};

export default Header;
