import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { SecondaryHeader } from '../../components/SecondaryHeader';
import { TeamSelection } from '../../components/TeamSelection';
import { CustomTextInput } from '../../components/CustomTextInput';
import { CustomButton } from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export const Tournament = () => {
    const navigation = useNavigation();
    const [numberOfTeams, setNumberOfTeams] = useState(0);
    const [teams, setTeams] = useState([]);

    const generateTeams = () => {
        const generatedTeams = [];
        console.log("Número de equipes:", numberOfTeams);
        for (let i = 1; i <= numberOfTeams; i++) {
            generatedTeams.push(`Equipe #${i}`);
        }
        setTeams(generatedTeams);
        console.log("Equipes geradas:", generatedTeams);
    };

    const handleTeamClick = (teamName) => {
        // Aqui vai abrir um componente ou modal para inserir os nomes dos participantes
        alert(`Aqui vai ser adicionado um componente ou modal para inserir os nomes dos jogadores ${teamName}`);
    };

    const navigateToShuffling = () => {
        navigation.navigate('Shuffling', { teams }); // Navega para a tela de chaveamento
    };
    
    return(
        <View style={styles.container}>
            
            <SecondaryHeader />
            
            <View style={styles.centerContent}>
                <Text style={styles.textTournament}>Torneio</Text>
            </View>
            
            <CustomContainer height="90%">
                <Text style={styles.textTeams}> Configuração dos times </Text>

                <View style={styles.teamSelectionContainer}>
                    <TeamSelection />
                    
                    <View style={styles.customTextInputContainer}>
                        <Text style={styles.textTeamNumbers}> Número de equipes </Text>
                        <CustomTextInput 
                            width={65}
                            onChangeText={(text) => {
                                console.log("Valor digitado:", text); // Verifica se o valor digitado está correto
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
        </View>
    )
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
        fontSize:35,
        color: 'white',
        alignItems: 'center',
        textAlign: 'center',
    }, 
    textTeams: {
        fontSize:20,
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
});