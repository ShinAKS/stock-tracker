import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="logo">Stock Tracker</li>
        <li class="search-icon">
          <input type="search" placeholder="Search" />
          <FontAwesomeIcon className="fas fa-search"></FontAwesomeIcon>
        </li>
        <div className="items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
