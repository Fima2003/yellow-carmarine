import React, { useState } from "react";
import { getStoredUser } from "./auth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [username, setUsername] = useState(getStoredUser());

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {!username ? (
        <Login setUsername={setUsername} />
      ) : (
        <Dashboard username={username} />
      )}
    </div>
  );
}

export default App;
