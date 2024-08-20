import axios from 'axios';

export const getPlayers = async () => {
  try {
    //const response = await axios.get('URL_DA_SUA_API');

    let listExample = 
      [
        { "id": 1, "name": "Player A", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":17 },
        { "id": 2, "name": "Player B", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":20 },
        { "id": 3, "name": "Player C", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":19 },
        { "id": 1, "name": "Player A", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":17 },
        { "id": 2, "name": "Player B", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":20 },
        { "id": 3, "name": "Player C", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":19 },
        { "id": 1, "name": "Player A", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":17 },
        { "id": 2, "name": "Player B", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":20 },
        { "id": 3, "name": "Player C", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":19 },
        { "id": 1, "name": "Player A", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":17 },
        { "id": 2, "name": "Player B", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":20 },
        { "id": 3, "name": "Player C", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":19 },
        { "id": 1, "name": "Player A", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":17 },
        { "id": 2, "name": "Player B", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":20 },
        { "id": 3, "name": "Player C", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg","level":19 },
      ];

    console.log(listExample);
    return listExample;
    //return response.data;
  } catch (error) {
    console.error("Erro ao buscar os players:", error);
    return [];
  }
};

export const addPlayer = async (player) => {
  try {
    //const response = await axios.post('URL_DA_SUA_API', player);
    return null;
    //return response.data;
  } catch (error) {
    console.error("Erro ao adicionar o player:", error);
    return null;
  }
};
