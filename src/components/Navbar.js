import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 50px",
  backgroundColor: "#1f2937",
  color: "#fff",
  fontFamily: "'Segoe UI', sans-serif"
};

const linkStyle = {
  marginLeft: "20px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
};

const linkHover = {
  color: "#60a5fa"
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0 }}>Customer Payments Portal</h2>
      <div>
        <Link to="/" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;
