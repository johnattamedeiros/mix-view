import axios from 'axios';

export const getPlayers = async () => {
  try {
    //const response = await axios.get('URL_DA_SUA_API');


    let listExample=[{id:1,name:"joao",stats:"11441"},{id:3,name:"pedro",stats:"444"},{id:4,name:"maria",stats:"44"},{id:5,name:"xesa",stats:"12311"}];

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
