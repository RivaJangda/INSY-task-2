import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PaymentForm from "./pages/PaymentForm";
import TransactionHistory from "./pages/TransactionHistory";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployeePayments from "./pages/EmployeePayments";

function App() {
  const [role, setRole] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login setRole={setRole} />} />
        <Route path="/register" element={<Register setRole={setRole} />} />
        <Route path="/dashboard" element={role === "employee" ? <EmployeeDashboard /> : <Dashboard role={role} />} />
        <Route path="/payment-form" element={<PaymentForm />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/employee-payments" element={<EmployeePayments />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
