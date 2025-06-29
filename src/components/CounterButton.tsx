import React from 'react';

const CounterButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div style={{ margin: '30px 0', display: 'flex', justifyContent: 'center' }}>
      <button 
        className="counter-button"
        style={{ 
          fontSize: '1.8rem', 
          padding: '20px 40px',
          background: 'linear-gradient(45deg, #FFD700, #FFA500)',
          border: 'none',
          borderRadius: '50px',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)',
          transition: 'all 0.3s ease',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          position: 'relative',
          overflow: 'hidden'
        }} 
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.3)';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.animation = 'pulse 0.3s ease';
        }}
        onAnimationEnd={(e) => {
          e.currentTarget.style.animation = '';
        }}
      >
        🚕 +1 Yellow Car 🚕
      </button>
    </div>
  );
};

export default CounterButton;