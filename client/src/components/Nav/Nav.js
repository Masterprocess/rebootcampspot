// Imports dependencies
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="nav-extended main-nav">
    <div className="nav-wrapper">
      {/* Webpage Logo */}
      <Link to="/">
        <p className="brand-logo" >reBootcampSpot</p>
      </Link>

      {/* Mobile: Creates burger icon */}
      <a href="/" data-activates="mobile-demo" className="button-collapse">
        <i className="material-icons">menu</i>
      </a>

      {/* Right side Navbar links */}
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {/* Link to Main Home Page */}
        <li 
          className={ window.location.pathname === "/" ? "active" : "" }
        >
          <Link to="/">Dashboard</Link>
        </li>

        {/* Link to Saved Articles */}
        <li 
          className={ window.location.pathname === "/calendar" ? "active" : "" }
        >
          <Link to="/calendar">Calendar</Link>
        </li>
        <li 
          className={ window.location.pathname === "/stats" ? "active" : "" }
        >
          <Link to="/stats">Stats</Link>
        </li>

        {/* Link to Repo */}
        <li>
          <a href="https://github.com/Masterprocess/rebootcampspot">Repo</a>
        </li>
      </ul>

      {/* Mobile: Navbar links */}
      <ul className="side-nav" id="mobile-demo">
        {/* Link to Dashboard Page */}
        <li 
          className={ window.location.pathname === "/" ? "active" : "" }
        >
          <Link to="/">Dashboard</Link>
        </li>

        {/* Link to Saved Articles */}
        <li 
          className={ window.location.pathname === "/calendar" ? "active" : "" }
        >
          <Link to="/calendar">Calendar</Link>
        </li>

        <li 
          className={ window.location.pathname === "/stats" ? "active" : "" }
        >
          <Link to="/stats">Stats</Link>
        </li>

        {/* Link to Repo */}
        <li>
          <a href="https://github.com/Masterprocess/rebootcampspot">Repo</a>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
