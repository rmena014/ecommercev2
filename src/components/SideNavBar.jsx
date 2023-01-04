import { Link } from "react-router-dom";
import "./SideNavBar.css";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

function SideNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="header">
      <div className="menuButton">
        <i className="icon" onClick={toggleMenu}>
          <FaIcons.FaBars size={25} />
        </i>
      </div>
      <div className={`navbar ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          <AiIcons.AiFillHome className="home_icon" size={20} />
          Home
        </Link>
        <Link to="/products" onClick={toggleMenu}>
          {" "}
          <FaIcons.FaCartPlus className="products_icon" size={20} />
          Products
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          <IoIcons.IoIosPaper className="contact_icon" size={20} />
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default SideNavbar;
