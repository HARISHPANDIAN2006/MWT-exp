import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5024"); // ✅ Backend port

export default function ChatBox({ businessName }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;
    const newMsg = {
      author: "User",
      text: message,
      time: new Date().toLocaleTimeString(),
    };
    socket.emit("send_message", newMsg);
    setChat((prev) => [...prev, newMsg]);
    setMessage("");
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px", width: "300px" }}>
      <h4>Chat with {businessName}</h4>
      <div style={{ height: "200px", overflowY: "auto" }}>
        {chat.map((msg, i) => (
          <div key={i}><strong>{msg.author}:</strong> {msg.text} <small>({msg.time})</small></div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}