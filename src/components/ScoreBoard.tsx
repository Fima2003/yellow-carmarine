import React from 'react';
import fimaImage from '../assets/fima.jpeg';
import marthaImage from '../assets/martha.jpg';

const Scoreboard = ({
  scores,
}: {
  scores: { username: string; score: number }[];
}) => {
  const getPlayerImage = (username: string) => {
    return username.toLowerCase() === 'fima' ? fimaImage : marthaImage;
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      marginTop: '40px',
      animation: 'fadeInUp 0.6s ease'
    }}>
      <div className="scoreboard-container" style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h3 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#333',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          🏆 Leaderboard 🏆
        </h3>
        <div className="players-container" style={{ display: 'flex', gap: '40px', alignItems: 'flex-end' }}>
          {scores
            .sort((a, b) => b.score - a.score)
            .map((player, index) => (
            <div 
              key={player.username} 
              className="player-card"
              style={{
                textAlign: 'center',
                padding: '20px',
                borderRadius: '15px',
                background: index === 0 
                  ? 'linear-gradient(45deg, #FFD700, #FFA500)' 
                  : 'linear-gradient(45deg, #e0e0e0, #c0c0c0)',
                color: 'white',
                minWidth: '150px',
                position: 'relative',
                transform: index === 0 ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s ease',
                border: index === 0 ? '3px solid #FFD700' : '3px solid #ddd'
              }}
            >
              {index === 0 && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '2rem'
                }}>
                  👑
                </div>
              )}
              <div className="player-avatar" style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                overflow: 'hidden',
                margin: '0 auto 15px',
                border: '4px solid white',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}>
                <img 
                  src={getPlayerImage(player.username)} 
                  alt={player.username}
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
                marginBottom: '10px',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                {player.username}
              </div>
              <div className="player-score" style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                animation: index === 0 ? 'bounce 2s infinite' : 'none'
              }}>
                {player.score}
              </div>
              <div style={{
                fontSize: '0.9rem',
                opacity: 0.9,
                marginTop: '5px'
              }}>
                Yellow Cars
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
