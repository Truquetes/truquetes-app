import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CustomContainer } from '../../components/CustomContainer';
import { SecondaryHeader } from '../../components/SecondaryHeader';
import { getNomeUsuario } from '../../utils/userService';
import { fetchGameResults } from '../../utils/gameService'

export const GameHistory = () => {
    const [nome, setNome] = useState('');
    const [gameResults, setGameResults] = useState([]);

    useEffect(() => {
        getNomeUsuario(setNome);
    }, []);

    useEffect(() => {
        const fetchGameData = async () => {
            const userGameResults = await fetchGameResults(nome);
            setGameResults(userGameResults);
        };

        fetchGameData();
    }, [nome]);

    return (
        <View style={styles.container}>
            <SecondaryHeader />
            
            <View style={styles.centerContent}>
                <Text style={styles.textGameHistory}>Histórico de Jogos</Text>
            </View>

            <CustomContainer height="90%"> 
                <View style={styles.header}>
                    <Text style={styles.headerText}>Jogadores</Text>
                    <Text style={styles.headerText}>Placar</Text>
                    <Text style={styles.headerText}>Data/Hora</Text>   
                </View>

                <ScrollView>

                    {gameResults.map((game, index) => (
                        <View
                            key={index}
                            style={[
                                styles.gameRow,
                                game.scoreUs < game.scoreThem ? styles.loser : styles.winner
                            ]}
                        >
                            <View style={styles.playersGroup}>
                                {game.players.length === 2 ? (
                                    <View style={styles.playersContainer}>
                                        <Text style={styles.gameText}>{game.players[0]}</Text>
                                        <Text style={styles.vsText}>X</Text>
                                        <Text style={styles.gameText}>{game.players[1]}</Text>
                                    </View>
                                ) : (
                                    <View style={styles.playersContainer}>
                                        <Text style={styles.gameText}>{`${game.players[0]} & ${game.players[1]}`}</Text>
                                        <Text style={styles.vsText}>X</Text>
                                        <Text style={styles.gameText}>{`${game.players[2]} & ${game.players[3]}`}</Text>
                                    </View>
                                )}
                            </View>
                            
                            <View style={styles.playersGroup}>
                                <Text style={styles.gameText}>{game.scoreUs} </Text>
                                <Text style={styles.vsText}> x </Text>
                                <Text style={styles.gameText}>{game.scoreThem}</Text>
                            </View>

                            <View style={styles.playersGroup}>
                                <Text style={[styles.gameText, styles.alignRight]}>{game.date.split(" ")[0]}</Text>
                                <Text style={[styles.gameText, styles.alignRight]}>{game.date.split(" ")[1]}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </CustomContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#054A18',
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    textGameHistory: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 15,
        color: 'black',
    },
    gameRow: {
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5, 
        paddingVertical: 10, 
        marginVertical: 1,
    },
    playersGroup: {
        alignItems: 'center', 
    },
    playersContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    vsText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 2,
    },
    gameText: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    winner: {
        backgroundColor: 'rgba(0, 128, 0, 0.5)', 
    },
    loser: {
        backgroundColor: 'rgba(255, 0, 0, 0.5)', 
    },
    alignRight: {
        textAlign: 'right', 
    },
});