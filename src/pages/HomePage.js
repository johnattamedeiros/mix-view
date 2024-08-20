import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PlayerList from '../components/PlayerList';
import Podium from '../components/Podium';
import { getPlayers, addPlayer } from '../services/playerService';
import { fetchPodiums } from '../services/podiumService';

const HomePage = () => {
  const [players, setPlayers] = useState([]);
  const [podiums, setPodiums] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const data = await getPlayers();
      setPlayers(data);
    };
    fetchPlayers();
    const loadPodiums = async () => {
      try {
        const data = await fetchPodiums();
        setPodiums(data);
      } catch (error) {
        console.error("Erro ao carregar pódios:", error);
      }
    };

    loadPodiums();
  }, []);

  const handleAddPlayer = async (newPlayer) => {
    const addedPlayer = await addPlayer(newPlayer);
    if (addedPlayer) setPlayers([...players, addedPlayer]);
  };

  return (
    <>
      <Header onAddPlayer={handleAddPlayer} />
      <div className="content">
        <Podium podiums={podiums} />
        <PlayerList players={players} />
      </div>
    </>
  );
};

export default HomePage;
