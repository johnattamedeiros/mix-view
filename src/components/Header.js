import React, { useState } from 'react';

const Header = ({ onAddPlayer }) => {
  const [playerName, setPlayerName] = useState('');

  const handleAdd = () => {
    if (playerName) {
      onAddPlayer({ name: playerName });
      setPlayerName('');
    }
  };

  return (
    <header className="header">
      <div className="site-name">mixdurasso</div>
      <div className="add-player">
        <input 
          type="text" 
          placeholder="Adicionar Player" 
          value={playerName} 
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button onClick={handleAdd}>Adicionar</button>
      </div>
    </header>
  );
};

export default Header;
