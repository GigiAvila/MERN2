import React, { useState, createContext } from 'react';

export const ColorModeContext = createContext();

const ColorMode = ({ children }) => {
  const [colorMode, setColorMode] = useState('light');

  const toggleColorMode = () => {
    setColorMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      <button className='buttonColorMode' onClick={toggleColorMode}>
        {colorMode === 'light' ? '☾' : '☀'}
      </button>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorMode;