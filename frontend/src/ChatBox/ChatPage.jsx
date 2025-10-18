// src/components/ChatPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatBox from "./ChatBox";

export default function ChatPage() {
  const { providerId } = useParams(); // only providerId from URL
  const navigate = useNavigate();


  // fetch logged-in userId from session
  const [userId,setUserId]=React.useState(null);
    React.useEffect(() => {
      // Fetch logged-in user
      fetch("http://localhost:5024/api/session/me", { credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            console.log("Logged in user data:", data.user);
            sessionStorage.setItem("userdemoId", data.user.userId);
            setUserId(data.user._id);
          }
        })
        .catch((err) => console.error("Error fetching session:", err));
      }, [userId]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>
        💬 Chat Between User ({userId && userId.slice(-5)}) and Provider ({providerId.slice(-5)})
      </h2>
      { userId && providerId &&
      <ChatBox senderId={userId} receiverId={providerId} />
}
    </div>
  );
}