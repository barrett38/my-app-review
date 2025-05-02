import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Login Page</h1>
      <input
        placeholder="Username"
        id="username"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        id="loginBtn"
        onClick={() => {
          if (!message.trim()) {
            alert("Please enter username");
          } else {
            alert(`Hello ${message}`);
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default App;
