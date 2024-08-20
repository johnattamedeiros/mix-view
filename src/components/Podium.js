import React from 'react';
import './../styles/gc.css'

const Podium = ({ podiums }) => {
  return (
    <div className="podium-container">
      {podiums.map((players, index) => (
        <div key={index} className="podium">
          <div> Titulo podium </div>
          <div className="podium-place second-place">
            <img src={players[1].image} alt={players[1].name} />
            <p>{players[1].name}</p>
            <span data-v-551cb209="" class={`gcf-new-badge-level gcf-new-badge-level-${players[1].level}`}>
            <span data-v-551cb209="" class="gcf-badge-level-value">{players[1].level}
            </span></span>
          </div>
          <div className="podium-place first-place">
            <img src={players[0].image} alt={players[0].name} />
            <p>{players[0].name}</p>
            <span data-v-551cb209="" class={`gcf-new-badge-level gcf-new-badge-level-${players[0].level}`}>
            <span data-v-551cb209="" class="gcf-badge-level-value">{players[0].level}
            </span></span>
          </div>
          <div className="podium-place third-place">
            <img src={players[2].image} alt={players[2].name} />
            <p>{players[2].name}</p>
            <span data-v-551cb209="" class={`gcf-new-badge-level gcf-new-badge-level-${players[2].level}`}>
            <span data-v-551cb209="" class="gcf-badge-level-value">{players[2].level}
            </span></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Podium;
