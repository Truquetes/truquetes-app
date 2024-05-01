import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { SecondaryHeader } from '../../components/SecondaryHeader';

export const GameHistory = () => {

    return(
        <View style={styles.container}>
            <SecondaryHeader />
            
            <View style={styles.centerContent}>
                <Text style={styles.textGameHistory}>Histórico de Jogos</Text>
            </View>

            <CustomContainer height="90%"> 
            <View style={styles.textInfo}>
                <Text style={styles.textInfo}>Jogadores</Text>
                <Text style={styles.textInfo}>Placar</Text>
                <Text style={styles.textInfo}>Data/Hora</Text>   
            </View>
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
        marginTop: 50,
    },
    textGameHistory: {
        fontSize:35,
        color: 'white',
        alignItems: 'center',
        textAlign: 'center',
        
    }, 
    textInfo: {
        fontSize: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color:'black',
    },
});