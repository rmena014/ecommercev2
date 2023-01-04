import React from "react";
import { Link } from "react-router-dom";
import "./RegNav.css";

function RegNav() {
  return (
    <div>
      <nav className="nav_bar">
        <ul className="site_nav" id="mynav">
          <li className="nav_links">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_links">
            <Link to="/products">Apparel</Link>
          </li>
          <li className="nav_links">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default RegNav;
