import React, { useState } from "react";

const ChatWindow = ({ vendorName }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello, how can I assist you?", sender: "vendor" },
    { text: "Hi, I have some questions about your products.", sender: "user" },
  ]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      // Here you can send the message to the vendor or perform any other action
      setMessage("");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", height: "300px" , backgroundColor: "white"}}>
      <h3 style={{ textAlign: "center", marginBottom: "20px"}}>Chat with {vendorName}</h3>
      <div style={{ overflowY: "scroll", maxHeight: "200px",backgroundColor: "white"}}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px", textAlign: msg.sender === "user" ? "right" : "left"}}>
            <span>{msg.sender === "user" ? "You: " : `${vendorName}: `}</span>
            {msg.text}
          </div>
        ))}
      </div>
      <textarea
        value={message}
        onChange={handleMessageChange}
        style={{ width: "100%", marginBottom: "10px" }}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage} style={{ float: "right" }}>Send</button>
    </div>
  );
};

export default ChatWindow;