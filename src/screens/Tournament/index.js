import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal, TextInput } from 'react-native';
import { CustomContainer } from '../../components/CustomContainer';
import { SecondaryHeader } from '../../components/SecondaryHeader';
import { TeamSelection } from '../../components/TeamSelection';
import { CustomTextInput } from '../../components/CustomTextInput';
import { CustomButton } from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export const Tournament = () => {
    const navigation = useNavigation();
    const [numberOfTeams, setNumberOfTeams] = useState(0);
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [players, setPlayers] = useState({});
    const [teamType, setTeamType] = useState('S'); // S para solo, D para dupla
    const [currentPlayers, setCurrentPlayers] = useState(['', '']);
    const [champion, setChampion] = useState(''); // Estado para armazenar a equipe campeã

    const generateTeams = () => {
        const generatedTeams = [];
        for (let i = 1; i <= numberOfTeams; i++) {
            generatedTeams.push(`Equipe #${i}`);
        }
        if (numberOfTeams % 2 !== 0) {
            generatedTeams.push('Balancear');
        }
        setTeams(generatedTeams);

        // Verificar se há apenas uma equipe restante para marcar como campeã
        if (generatedTeams.length === 1) {
            setChampion(generatedTeams[0]);
        } else {
            setChampion(''); // Limpar o estado da equipe campeã se não houver apenas uma equipe
        }
    };

    const handleTeamClick = (teamName) => {
        if (teamName === 'Balancear') return;
        setSelectedTeam(teamName);
        setCurrentPlayers(players[teamName] || ['', '']);
        setModalVisible(true);
    };

    const handleAddPlayer = (playerName, playerIndex) => {
        setCurrentPlayers((prevPlayers) => {
            const newPlayers = [...prevPlayers];
            newPlayers[playerIndex] = playerName;
            return newPlayers;
        });
    };

    const handleModalSubmit = () => {
        setPlayers((prevPlayers) => ({
            ...prevPlayers,
            [selectedTeam]: currentPlayers,
        }));

        const updatedTeams = teams.map((team) => {
            if (team === selectedTeam) {
                return currentPlayers.filter(player => player).join(' & ');
            }
            return team;
        });

        setTeams(updatedTeams);
        setModalVisible(false);
    };

    const navigateToShuffling = () => {
        if (teams.length === 0) {
            alert('Nenhuma equipe foi gerada. Por favor, gere as equipes primeiro.');
            return;
        }
        if (Object.keys(players).length === 0) {
            alert('Nenhum jogador foi adicionado às equipes. Por favor, adicione jogadores primeiro.');
            return;
        }

        let finalTeams = teams;
        if (champion && champion !== '') {
            finalTeams = [champion];
        }

        navigation.navigate('Shuffling', { teams: finalTeams, players }); // Navega para a tela de chaveamento
    };

    const handleTeamSelection = (option) => {
        setTeamType(option);
    };

    return (
        <View style={styles.container}>
            <SecondaryHeader />
            <View style={styles.centerContent}>
                <Text style={styles.textTournament}>Torneio</Text>
            </View>
            <CustomContainer height="90%">
                <Text style={styles.textTeams}>Configuração dos times</Text>
                <View style={styles.teamSelectionContainer}>
                    <TeamSelection onSelect={handleTeamSelection} />
                    <View style={styles.customTextInputContainer}>
                        <Text style={styles.textTeamNumbers}>Número de equipes</Text>
                        <CustomTextInput
                            width={65}
                            onChangeText={(text) => {
                                setNumberOfTeams(parseInt(text));
                            }}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <CustomButton
                    backgroundColor={'green'}
                    text={'Gerar equipes'}
                    color={'black'}
                    onPress={generateTeams}
                />
                <ScrollView>
                    {teams.map((team, index) => (
                        <TouchableOpacity key={index} onPress={() => handleTeamClick(team)}>
                            <Text style={styles.teamText}>{team}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <CustomButton
                    backgroundColor={'green'}
                    text={'Gerar chaveamento'}
                    color={'black'}
                    onPress={navigateToShuffling}
                />
            </CustomContainer>
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Adicionar Jogadores em {selectedTeam}</Text>
                        <TextInput
                            style={styles.playerInput}
                            placeholder="Nome do jogador 1"
                            value={currentPlayers[0] || ''}
                            onChangeText={(text) => handleAddPlayer(text, 0)}
                        />
                        {teamType === 'D' && (
                            <TextInput
                                style={styles.playerInput}
                                placeholder="Nome do jogador 2"
                                value={currentPlayers[1] || ''}
                                onChangeText={(text) => handleAddPlayer(text, 1)}
                            />
                        )}
                        <CustomButton
                            backgroundColor={'green'}
                            text={'Salvar'}
                            color={'black'}
                            onPress={handleModalSubmit}
                        />
                        <CustomButton
                            backgroundColor={'green'}
                            text={'Fechar'}
                            color={'black'}
                            onPress={() => setModalVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#054A18',
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    textTournament: {
        fontSize: 35,
        color: 'white',
        alignItems: 'center',
        textAlign: 'center',
    },
    textTeams: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'black',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20,
    },
    textTeamNumbers: {
        fontSize: 18,
        color: 'black',
    },
    teamSelectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    customTextInputContainer: {
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
    },
    teamText: {
        fontSize: 16,
        color: 'black',
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#AFD1B7',
        borderRadius: 5,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    playerInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default Tournament;
