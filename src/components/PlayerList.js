import React from 'react';

const PlayerList = ({ players }) => {
  return (
    <div className="player-list">
      {players.map((player) => (
        <div key={player.id} className="player-item">
          {/* <img src={player.image} alt={player.name} className="player-image" /> */}
          
          <div className="player-info">
          <img src="https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" alt="john's photo" class="player-image"></img>
            <p>{player.name}</p>
            <p>{player.stats}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
