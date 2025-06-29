import React, { useState } from 'react';
import { storeUser } from '../auth';
import fimaImage from '../assets/fima.jpeg';
import marthaImage from '../assets/martha.jpg';

const Login = ({ setUsername }: { setUsername: (username: string) => void }) => {
  const [input, setInput] = useState('');
  const [selectedUser, setSelectedUser] = useState<string>('');

  const handleLogin = () => {
    const name = input.trim();
    if (name.toLowerCase() !== 'fima' && name.toLowerCase() !== 'martha') {
      alert('Only Fima or Martha allowed!');
      return;
    }
    storeUser(name);
    setUsername(name);
  };

  const handleUserSelect = (user: string) => {
    setSelectedUser(user);
    setInput(user);
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="login-container" style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '25px',
        padding: '50px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        animation: 'fadeInUp 0.8s ease'
      }}>
        <h1 className="login-title" style={{
          color: '#333',
          fontSize: '2.5rem',
          marginBottom: '10px',
          fontWeight: 'bold'
        }}>
          🚕 Yellow Car Counter 🚕
        </h1>
        <p style={{
          color: '#666',
          fontSize: '1.2rem',
          marginBottom: '40px'
        }}>
          Choose your player to start counting!
        </p>

        <div className="user-selection" style={{
          display: 'flex',
          gap: '30px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {[
            { name: 'Fima', image: fimaImage },
            { name: 'Martha', image: marthaImage }
          ].map((user) => (
            <div
              key={user.name}
              className="user-card"
              onClick={() => handleUserSelect(user.name)}
              style={{
                cursor: 'pointer',
                padding: '20px',
                borderRadius: '20px',
                background: selectedUser.toLowerCase() === user.name.toLowerCase() 
                  ? 'linear-gradient(45deg, #FFD700, #FFA500)' 
                  : 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
                transition: 'all 0.3s ease',
                transform: selectedUser.toLowerCase() === user.name.toLowerCase() ? 'scale(1.05)' : 'scale(1)',
                boxShadow: selectedUser.toLowerCase() === user.name.toLowerCase() 
                  ? '0 10px 30px rgba(255, 215, 0, 0.3)' 
                  : '0 5px 15px rgba(0, 0, 0, 0.1)',
                border: selectedUser.toLowerCase() === user.name.toLowerCase() 
                  ? '3px solid #FFD700' 
                  : '3px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (selectedUser.toLowerCase() !== user.name.toLowerCase()) {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedUser.toLowerCase() !== user.name.toLowerCase()) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              <div className="user-avatar" style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto 15px',
                border: '4px solid white',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}>
                <img 
                  src={user.image} 
                  alt={user.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: selectedUser.toLowerCase() === user.name.toLowerCase() ? 'white' : '#333',
                textShadow: selectedUser.toLowerCase() === user.name.toLowerCase() ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'
              }}>
                {user.name}
              </div>
            </div>
          ))}
        </div>

        <input
          style={{
            width: '100%',
            padding: '15px 20px',
            fontSize: '1.2rem',
            borderRadius: '25px',
            border: '2px solid #ddd',
            marginBottom: '25px',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.9)',
            transition: 'all 0.3s ease'
          }}
          placeholder="Enter Fima or Martha"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={(e) => {
            e.target.style.border = '2px solid #667eea';
            e.target.style.boxShadow = '0 0 15px rgba(102, 126, 234, 0.3)';
          }}
          onBlur={(e) => {
            e.target.style.border = '2px solid #ddd';
            e.target.style.boxShadow = 'none';
          }}
        />

        <button 
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '18px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            color: 'white',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
          }}
        >
          🚀 Start Counting!
        </button>
      </div>
    </div>
  );
};

export default Login;