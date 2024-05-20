import { db } from '../database/firebaseConnection';

//Retorna o número de partidas jogadas
export async function numberOfMatches(nome, setResultCount) {
    try {
        const snapshot = await db
            .ref('gameResults')
            .orderByChild('userName')
            .equalTo(nome)
            .once('value');

        setResultCount(snapshot.numChildren());
    } catch (error) {
        console.error('Error fetching game results:', error);
    }
};

//Retorna o número de vitórias/derrotas
export const countGameResults = (userName, setWins, setDefeats) => {
    const gameResultsRef = db.ref('gameResults');

    gameResultsRef
        .orderByChild('userName')
        .equalTo(userName) // Filtro para o nome do usuário logado
        .once('value')
        .then((snapshot) => {
            let wins = 0;
            let defeats = 0;
            snapshot.forEach((childSnapshot) => {
                const result = childSnapshot.val();
                if (result.scoreUs > result.scoreThem) {
                    wins++;
                } else if (result.scoreUs < result.scoreThem) {
                    defeats++;
                }
            });
            setWins(wins);
            setDefeats(defeats);
        })
        .catch((error) => {
            console.error('Erro ao contar os resultados do jogo:', error);
        });
};

//Calcula o desempenho do usuário
export const calculatePerformance = (wins, totalGames) => {
    if (totalGames === 0) {
        return 0;
    }
    return ((wins / totalGames) * 100).toFixed(2);
};

//Calcula a quantidade média de pontos por jogo
export const calculateAverageScoreUs = (userName, setAverageScoreUs) => {
    const gameResultsRef = db.ref('gameResults');

    gameResultsRef
        .orderByChild('userName')
        .equalTo(userName)
        .once('value')
        .then((snapshot) => {
            let totalScoreUs = 0;
            let totalGames = 0;
            snapshot.forEach((childSnapshot) => {
                const result = childSnapshot.val();
                totalScoreUs += result.scoreUs;
                totalGames++;
            });
            const averageScoreUs = totalGames > 0 ? (totalScoreUs / totalGames).toFixed(2) : 0;
            setAverageScoreUs(averageScoreUs);
        })
        .catch((error) => {
            console.error('Erro ao calcular a média de pontos por partida:', error);
        });
};