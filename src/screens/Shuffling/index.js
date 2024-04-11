import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Logo } from '../../components/Logo';
import { CustomButton } from '../../components/CustomButton';

export const Shuffling = ({ route }) => {
    const screenWidth = Dimensions.get('window').width;
    const { teams } = route.params;
    const [winners, setWinners] = useState(new Array(teams.length / 2).fill(null));
    const [matches, setMatches] = useState(generateMatches(teams));

    // Lógica para gerar o chaveamento de equipes
    function generateMatches(teams) {
        const shuffledTeams = [...teams].sort(() => Math.random() - 0.5);
        const matches = [];
        
        for (let i = 0; i < shuffledTeams.length; i += 2) {
            const match = { team1: shuffledTeams[i], team2: shuffledTeams[i + 1], winner: null };
            matches.push(match);
        }
        return matches;
    }

    // Manipulador de eventos para selecionar o vencedor de uma partida
    const selectWinner = (index, team) => {
        const updatedWinners = [...winners];
        updatedWinners[index] = team;
        setWinners(updatedWinners);
    };

    // Lógica para avançar para a próxima rodada após selecionar os vencedores
    const advanceRound = () => {
        const nextRoundTeams = winners.filter(winner => winner !== null);
        
        if (nextRoundTeams.length !== matches.length) {
            alert('Você deve selecionar um vencedor para cada partida.');
            return;
        }

        const newMatches = [];
        
        for (let i = 0; i < nextRoundTeams.length; i += 2) {
            const match = { team1: nextRoundTeams[i], team2: nextRoundTeams[i + 1], winner: null };
            newMatches.push(match);
        }

        setMatches(newMatches);
        setWinners(new Array(nextRoundTeams.length / 2).fill(null));
    };

    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={styles.textLogo}>Truquetes</Text>
                <Logo height={20} width={screenWidth} />
            </View>

            <View style={styles.centerContent}>
                <Text style={styles.textShuffling}>Chaveamento</Text>
            </View>

            <ScrollView>
                {matches.map((match, index) => (
                    <View key={index} style={styles.matchContainer}>
                        <TouchableOpacity onPress={() => selectWinner(index, match.team1)}>
                            <Text style={[styles.matchText, winners[index] === match.team1 && styles.winnerText]}>
                                {match.team1}
                            </Text>
                        </TouchableOpacity>
                        
                        <Text style={styles.vsText}>vs</Text>
                        
                        <TouchableOpacity onPress={() => selectWinner(index, match.team2)}>
                            <Text style={[styles.matchText, winners[index] === match.team2 && styles.winnerText]}>
                                {match.team2}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            
            <CustomButton
                backgroundColor={'green'}
                text={'Avançar para a próxima rodada'}
                color={'black'}
                onPress={advanceRound}
            />
 
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054A18',
  },
  topContent: {
    alignItems: 'center',
  },
  textLogo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textShuffling: {
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  matchText: {
    color: 'white',
    fontSize: 18,
  },
  winnerText: {
    fontWeight: 'bold',
  },
  advanceButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  advanceButtonText: {
    color: 'black',
    fontSize: 16,
  },
  vsText: {
    color: 'white',
    fontSize: 18,
  },
});
