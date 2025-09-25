import React, { useState } from "react";
import axios from "axios";


const colors = {
  deepBlue: "#0a2540",
  orangeRed: "#FF4500",
  yellowOrange: "#FFA500",
  lightGray: "#f4f6f9",
  white: "#ffffff"
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontFamily: "'Segoe UI', sans-serif",
  backgroundColor: colors.deepBlue,
  padding: "20px"
};

const cardStyle = {
  backgroundColor: colors.white,
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
  width: "420px",
  textAlign: "center",
  borderTop: `6px solid ${colors.orangeRed}`
};

const titleStyle = {
  marginBottom: "20px",
  color: colors.deepBlue,
  fontWeight: "700",
  fontSize: "22px"
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

function PaymentForm() {
  const [recipientName, setRecipientName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [swiftCode, setSwiftCode] = useState("");
  const [reference, setReference] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!recipientName || !accountNumber || !amount || !swiftCode) {
      return alert("Please complete all required fields.");
    }

    try {
      const response = await axios.post("https://your-api/make-payment", {
        recipientName,
        accountNumber,
        amount,
        currency,
        swiftCode,
        reference
      });
      console.log(response.data);
      alert("Payment Successful!");
      setRecipientName("");
      setAccountNumber("");
      setAmount("");
      setCurrency("USD");
      setSwiftCode("");
      setReference("");
    } catch (err) {
      console.error(err);
      alert("Payment Failed");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}> International Payment</h2>
        <form onSubmit={handlePayment}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Recipient Full Name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="text"
            placeholder="Recipient Account Number / IBAN"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <select
            style={selectStyle}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
          <select
            style={selectStyle}
            value={swiftCode}
            onChange={(e) => setSwiftCode(e.target.value)}
            required
          >
            <option value="">Select SWIFT Code</option>
            <option value="BOFAUS3N">BOFAUS3N - Bank of America</option>
            <option value="BARCGB22">BARCGB22 - Barclays UK</option>
            <option value="DEUTDEFF">DEUTDEFF - Deutsche Bank</option>
            <option value="SBZAZAJJ">SBZAZAJJ - Standard Bank SA</option>
          </select>
          <input
            style={inputStyle}
            type="text"
            placeholder="Payment Reference (optional)"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
          <button
            style={buttonStyle}
            type="submit"
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Send Payment
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
