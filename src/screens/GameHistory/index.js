import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Logo } from '../../components/Logo';

export const GameHistory = () => {
    const screenWidth = Dimensions.get('window').width; 

    return(
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={styles.textLogo}>Truquetes</Text>
                <Logo height={20} width={screenWidth} />
            </View>
            
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
    topContent: {
        alignItems: 'center',
        marginBottom: 20,
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    textLogo: {
        textAlign: 'center', 
        color: 'white', 
        fontSize: 20, 
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
    textResultV: {
        fontSize: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color:'black',
        
    },

});