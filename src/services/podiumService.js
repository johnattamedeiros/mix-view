import axios from 'axios';

const API_URL = 'https://sua-api.com/podiums'; // Substitua pela URL da sua API

export const fetchPodiums = async () => {
  try {
    //const response = await axios.get(API_URL);
    //return response.data; // Supondo que a API retorna um array de pódios

    let podums = [
        [
          { "id": 1, "name": "Player A", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" },
          { "id": 2, "name": "Player B", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" },
          { "id": 3, "name": "Player C", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" }
        ],
        [
          { "id": 4, "name": "Player D", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" },
          { "id": 5, "name": "Player E", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" },
          { "id": 6, "name": "Player F", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" }
        ],
        ,
        [
          { "id": 4, "name": "Player D", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" },
          { "id": 5, "name": "Player E", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" },
          { "id": 6, "name": "Player F", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" }
        ],
        ,
        [
          { "id": 4, "name": "Player D", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" },
          { "id": 5, "name": "Player E", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" },
          { "id": 6, "name": "Player F", "image": "https://static.gamersclub.com.br/players/avatar/84180/84180_full.jpg" }
        ],
        
      ];

      return podums;
      
  } catch (error) {
    console.error("Erro ao buscar pódios:", error);
    throw error;
  }
};
