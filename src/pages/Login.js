import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const colors = {
  deepBlue: "#0a2540",
  orangeRed: "#FF4500",
  yellowOrange: "#FFA500",
  white: "#ffffff",
  lightGray: "#f4f6f9"
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontFamily: "'Segoe UI', sans-serif",
  backgroundColor: colors.deepBlue
};

const cardStyle = {
  backgroundColor: colors.white,
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
  width: "380px",
  textAlign: "center",
  borderTop: `6px solid ${colors.orangeRed}`
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
  backgroundColor: colors.lightGray
};

const selectStyle = {
  ...inputStyle,
  cursor: "pointer"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: `linear-gradient(90deg, ${colors.orangeRed}, ${colors.yellowOrange})`,
  color: colors.white,
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  marginTop: "16px",
  transition: "transform 0.2s ease"
};

function Login({ setRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return alert("Invalid email format");

    try {
      const response = await axios.post("https://your-api/login", {
        email,
        password,
        role: userRole
      });
      console.log(response.data);
      setRole(userRole);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login Failed");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "20px", color: colors.deepBlue, fontWeight: "700" }}>
          Secure Login
        </h2>
        <form onSubmit={handleLogin}>
          <input
            style={inputStyle}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            style={selectStyle}
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="user">Customer</option>
            <option value="employee">Bank Employee</option>
          </select>
          <button
            style={buttonStyle}
            type="submit"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
