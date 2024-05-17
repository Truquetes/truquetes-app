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