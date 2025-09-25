import React from "react";
import { Link } from "react-router-dom";

// Color palette
const colors = {
  deepBlue: "#0D1B2A",
  orangeRed: "#FF4500",
  yellowOrange: "#FFA500",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "85vh",
  fontFamily: "'Segoe UI', sans-serif",
  backgroundColor: colors.deepBlue,
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  textAlign: "center",
  minWidth: "320px",
  width: "400px",
};

const headingStyle = {
  color: colors.deepBlue,
  marginBottom: "25px",
};

const buttonStyle = {
  backgroundColor: colors.orangeRed,
  color: "#fff",
  border: "none",
  padding: "14px 22px",
  margin: "10px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "all 0.3s ease",
};

const buttonHover = {
  backgroundColor: colors.yellowOrange,
  color: colors.deepBlue,
};

function Dashboard({ role }) {
  if (role === "employee") {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={headingStyle}>Employee Dashboard</h2>
          <p style={{ color: "#444" }}>
            Redirecting to Employee Dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>User Dashboard</h2>
        <Link to="/payment-form">
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              Object.assign(e.target.style, buttonHover)
            }
            onMouseOut={(e) =>
              Object.assign(e.target.style, buttonStyle)
            }
          >
            Make a Payment
          </button>
        </Link>
        <Link to="/transaction-history">
          <button
            style={buttonStyle}
            onMouseOver={(e) =>
              Object.assign(e.target.style, buttonHover)
            }
            onMouseOut={(e) =>
              Object.assign(e.target.style, buttonStyle)
            }
          >
            Transaction History
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
