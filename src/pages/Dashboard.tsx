import React, { useEffect, useState } from "react";
import axios from "axios";
import CounterButton from "../components/CounterButton";
import Scoreboard from "../components/ScoreBoard";

const Dashboard = ({ username }: { username: string }) => {
  const [scores, setScores] = useState<{ username: string; score: number }[]>(
    []
  );

  const fetchScores = async () => {
    const res = await axios.get("https://yellow-carmarine-18fbdf3f6226.herokuapp.com/scores");
    setScores(res.data);
  };

  const increment = async () => {
    await axios.post("https://yellow-carmarine-18fbdf3f6226.herokuapp.com/scores/increment", {
      username,
    });
    fetchScores();
  };

  useEffect(() => {
    fetchScores();
    const interval = setInterval(fetchScores, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container" style={{ 
      minHeight: '100vh',
      padding: '20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div className="dashboard-header" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '40px',
          marginBottom: '30px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          animation: 'fadeInUp 0.6s ease'
        }}>
          <h1 className="dashboard-title" style={{
            color: 'white',
            fontSize: '3rem',
            marginBottom: '10px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            fontWeight: 'bold'
          }}>
            🚕 Yellow Car Counter 🚕
          </h1>
          <h2 className="dashboard-subtitle" style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '1.5rem',
            fontWeight: 'normal',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Welcome back, {username}!
          </h2>
        </div>
        
        <CounterButton onClick={increment} />
        <Scoreboard scores={scores} />
        
        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            margin: 0
          }}>
            🎯 Keep spotting those yellow cars! Scores update every 3 seconds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
