// src/components/ChatPage.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatBox from "./ChatBox";
import { motion } from "framer-motion";


export default function ChatPage() {
  const { providerId } = useParams(); // only providerId from URL
  const navigate = useNavigate();

  // fetch logged-in userId from session
  const [userId, setUserId] = React.useState(null);
  // src/components/ChatPage.jsx
useEffect(() => {
  fetch("http://localhost:5024/api/session/me", { credentials: "include" })
    .then((res) => res.json())
    .then((data) => {
      if (data.user) {
        console.log("Logged in user data:", data.user);
        sessionStorage.setItem("userdemoId", data.user.userId);
        setUserId(data.user._id);
      } else {
        // 🚨 Not logged in → redirect to login
        navigate("/loginsignup");
      }
    })
    .catch((err) => {
      console.error("Error fetching session:", err);
      navigate("/loginsignup");
    });
}, []);

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-indigo-600 text-white shadow-md">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sm font-medium hover:text-gray-200 transition"
        >
          ← Back
        </button>

        <h2 className="text-lg font-semibold">💬 Chat Room</h2>

        <div className="text-sm text-gray-200">
          {userId && providerId ? (
            <>
              <span className="font-medium text-white">
                User ({userId.slice(-5)})
              </span>{" "}
              ↔{" "}
              <span className="font-medium text-white">
                Provider ({providerId.slice(-5)})
              </span>
            </>
          ) : (
            "Loading..."
          )}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col justify-between bg-gray-50 overflow-hidden">
        {userId && providerId ? (
          <div className="flex-1 overflow-y-auto p-4">
            <ChatBox senderId={userId} receiverId={providerId} />
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Loading chat...
          </div>
        )}
      </div>
    </div>
  );
}
