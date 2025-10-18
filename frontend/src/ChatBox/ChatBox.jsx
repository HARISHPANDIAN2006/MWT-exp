import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

export default function ChatBox({ senderId, receiverId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [socket, setSocket] = useState(null);

  // Initialize socket only once
  useEffect(() => {
    const newSocket = io("http://localhost:5024");
    setSocket(newSocket);

    // Cleanup on unmount
    return () => newSocket.disconnect();
  }, []);

  // Load old messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5024/api/chat/${senderId}/${receiverId}`,
          { withCredentials: true }
        );
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    };
    fetchMessages();
  }, [senderId, receiverId]);

  // Join room and listen for messages
  useEffect(() => {
    if (!socket) return;

    socket.emit("joinRoom", { senderId, receiverId });

    const handleReceiveMessage = (message) => {
      setMessages((prev) => [...prev, message]);
    };

    socket.on("receiveMessage", handleReceiveMessage);

    // Cleanup listener when senderId, receiverId, or socket changes
    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [socket, senderId, receiverId]);

  const sendMessage = () => {
    if (!text.trim() || !socket) return;

    socket.emit("sendMessage", { senderId, receiverId, text });
    setText("");
  };

  return (
    <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4">
      <div className="h-80 overflow-y-auto border border-gray-200 rounded-md p-3 mb-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`my-2 ${msg.senderId === senderId ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.senderId === senderId ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-l-md p-2"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
