import React from 'react';
import './../styles/gc.css'

const PlayerList = ({ players }) => {
  return (
    <div className="player-list">
      {players.map((player) => (
        <div key={player.id} className="player-card">
          {/* <img src={player.image} alt={player.name} className="player-image" /> */}

          <div className="player-info">
            <img src="https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" alt="john's photo" class="player-image"></img>
            <p>{player.name}</p>
            <span data-v-551cb209="" class={`gcf-new-badge-level gcf-new-badge-level-${player.level}`}>
              <span data-v-551cb209="" class="gcf-badge-level-value">{player.level}
              </span></span>
              <p><img src="./images/kill.png" class="stats-ico white" /> 1230</p>
            <p><img src="./images/death.png" class="stats-ico white" /> 1000</p>
            <p><img src="./images/kdr.png" class="stats-ico white" />1,2</p>
            <p>Vitórias: 51</p>
            <p>Derrotas: 62</p>
          </div>
          <div className="player-badges">
            <div> <img src="./images/bait.png" class="stats-ico white" /> Baiter</div>
            <div> <img src="./images/cafeleite.png" class="stats-ico white" /> Café com leite</div>
            <div> <img src="./images/headshot.png" class="stats-ico white" /> Headshot Master</div>
            <div> <img src="./images/trofeu.png" class="stats-ico white" /> Trofeu</div>
            <div> <img src="./images/cafeleite.png" class="stats-ico white" /> Café com leite</div>
            <div> <img src="./images/cafeleite.png" class="stats-ico white" /> Café com leite</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
