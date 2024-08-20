import React from 'react';

const Podium = ({ podiums }) => {
  return (
    <div className="podium-container">
      {podiums.map((players, index) => (
        <div key={index} className="podium">
          <div> Titulo podium </div>
          <div className="podium-place second-place">
            <img src={players[1].image} alt={players[1].name} />
            <p>{players[1].name}</p>
          </div>
          <div className="podium-place first-place">
            <img src={players[0].image} alt={players[0].name} />
            <p>{players[0].name}</p>
          </div>
          <div className="podium-place third-place">
            <img src={players[2].image} alt={players[2].name} />
            <p>{players[2].name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Podium;
