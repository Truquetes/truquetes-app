import { db } from '../database/firebaseConnection';

//Salva o resultado do jogo no banco de dados
export async function saveGame(players, scoreUs, scoreThem, nome) {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const formattedDateTime = currentDate + ' ' + currentTime

    const gameData = {
      players,
      scoreUs,
      scoreThem,
      date: formattedDateTime,
      userName: nome,
    };
  
    try {
      await db.ref('gameResults').push(gameData);
      console.log('Jogo salvo com sucesso');
    } catch (error) {
      console.error('Erro ao salvar o jogo: ', error);
    }
};

//Retorna o histórico dos jogos do usuario
export async function fetchGameResults(userName) {
  if (!userName) return []; // Se não houver nome de usuário, retorna uma array vazia

  try {
      const snapshot = await db.ref('gameResults').once('value');
      const data = snapshot.val();
      const userGameResults = Object.values(data).filter(game => game.userName === userName);
      return userGameResults;
  } catch (error) {
      console.error('Erro ao buscar resultados do jogo:', error);
      return []; // Em caso de erro, retorna uma array vazia
  }
};