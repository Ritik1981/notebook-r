import React from "react";
import { NavLink } from "react-router-dom";
// import r.jpg from './assets/r.jpg'
function Navbar() {
  //   const activeStyle = {
  //     borderBottom: "2px solid #007bff",
  //     color: "#007bff",
  //   };
  const navLinkStyle = ({ isActive }) => {
    // Receives an object from NavLink containing isActive as it's one of the key
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
      borderBottom: isActive ? "2px solid #007bff" : "none",
      padding: "10px 15px",
      margin: "0 5px",
      color: isActive ? "#007bff" : "#333",
    };
  };

  return (
    <nav
      style={{
        backgroundColor: "#87CEFA",
        padding: "10px 20px",
        width: "100%", // Full width
        position: "fixed", // Stick to the top
        top: 0, // Position at the top
        left: "0px",
        zIndex: 1000, // Ensure it's above other elements
        borderRadius: "6px",
      }}
    >
      <NavLink to="/" style={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to="/register" style={navLinkStyle}>
        Register
      </NavLink>
      <NavLink to="/login" style={navLinkStyle}>
        Login
      </NavLink>
      <NavLink to="/note" style={navLinkStyle}>
        Note
      </NavLink>
      <NavLink to="/profile" style={navLinkStyle}>
        Profile
      </NavLink>
    </nav>
  );
}

export default Navbar;
