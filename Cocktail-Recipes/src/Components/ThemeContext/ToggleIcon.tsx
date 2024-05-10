import React from 'react';
import { useTheme } from './ThemeContext'; // Ensure this path is correct
import './ThemeContext.css';

const ToggleIcon: React.FC = () => {
  const {  theme, toggleTheme } = useTheme();

  return (
    <div className='Toggle-Button'>
    < button 
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      style={{ cursor: 'pointer', background: 'none', border: 'none', fontSize: '24px', outline: 'none' }}
    >
      {theme === 'light' ? <span>🌞</span> : <span>🌜</span>}
    </button>
    </div>
  );
};

export default ToggleIcon;
