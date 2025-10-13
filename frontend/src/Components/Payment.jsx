import React, { useState } from "react";
import axios from "axios";

export default function Payment() {
  const [amount, setAmount] = useState("5"); // default ₹5 (recommended)
  const [msg, setMsg] = useState("");

  const handlePayment = async () => {
    setMsg("");
    if (!amount || Number(amount) <= 0) return setMsg("Enter a valid amount");

    try {
      // 1) create order on backend (amount in rupees)
      const resp = await axios.post(
        "http://localhost:5024/api/payment/create-order",
        { amount },
        { headers: { "Content-Type": "application/json" } }
      );
      const { order, key } = resp.data;
      if (!order) return setMsg("Failed to create order");

      // 2) Razorpay checkout options — force UPI collect flow and prefill test VPA
      const options = {
        key: key, // returned from backend (rzp_test_...)
        amount: order.amount,
        currency: order.currency,
        name: "Your App Name",
        description: "Test UPI Payment (simulate)",
        order_id: order.id,
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        notes: { test: "UPI simulate" },

        // IMPORTANT: force UPI collect flow and prefill a test VPA
        method: {
          card: true,
          netbanking: true,
          wallet: true,
          upi: true,   // enable UPI
          qr: true,
          paylater: true,
        },

        // this is the key part — tell checkout to use UPI collect and prefill the VPA
        upi: {
          flow: "collect",         // 'collect' requests VPA from user or prefilled VPA
          vpa: "test@upi",        // test VPA to prefill (test mode will accept this)
        },

        handler: function (response) {
          // successful payment callback
          console.log("razorpay response:", response);
          alert("Payment Successful (simulated). Payment ID: " + response.razorpay_payment_id);
        },

        modal: {
          ondismiss: function () {
            console.log("Checkout closed");
          },
        },

        theme: { color: "#528FF0" },
      };

      const rzp = new window.Razorpay(options);

      // open checkout
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      setMsg("Payment flow error: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Simulate UPI Payment (test)</h3>
      <div style={{ marginBottom: 8 }}>
        <label>Amount (INR): </label>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: 120 }}
        />
      </div>
      <button onClick={handlePayment} style={{ padding: "8px 16px" }}>
        Pay (simulate UPI)
      </button>

      {msg && <p style={{ color: "red" }}>{msg}</p>}

      <p style={{ marginTop: 12 }}>
        Test VPA to enter (if asked): <b>test@upi</b> or <b>user@upi</b>
      </p>
    </div>
  );
}
