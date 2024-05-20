import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { SecondaryHeader } from '../../components/SecondaryHeader';
import { getNomeUsuario } from '../../utils/userService';
import { calculateAverageScoreUs, calculatePerformance, countGameResults, numberOfMatches } from '../../utils/statisticService'

export const Statistic = () => {
    const [nome, setNome] = useState('');
    const [resultCount, setResultCount] = useState(0);
    const [resultWins, setWins] = useState(0);
    const [resultDefeats, setDefeats] = useState(0);
    const [performance, setPerformance] = useState(0);
    const [averageScoreUs, setAverageScoreUs] = useState(0);

    useEffect(() => {
        getNomeUsuario(setNome)
    }, []);

    useEffect(() => { 
        if (nome !== 'carregando...') {
            numberOfMatches(nome, setResultCount)
            countGameResults(nome, setWins, setDefeats);
            calculateAverageScoreUs(nome, setAverageScoreUs);
        }
    }, [nome]);

    useEffect(() => {
        if (resultCount > 0) {
            setPerformance(calculatePerformance(resultWins, resultCount));
        }
    }, [resultWins, resultCount]);

    return (
        <View style={styles.container}>

            <SecondaryHeader />

            <View style={styles.centerContent}>
                <Text style={styles.textStatistic}>Estatísticas</Text>
            </View>

            <CustomContainer height="90%">
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.tableTitle}>Partidas jogadas</Text>
                        <Text style={styles.tableValue}>{resultCount}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.tableTitle}>Vitórias</Text>
                        <Text style={styles.tableValue}>{resultWins}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.tableTitle}>Derrotas</Text>
                        <Text style={styles.tableValue}>{resultDefeats}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.tableTitle}>Desempenho</Text>
                        <Text style={styles.tableValue}>{performance}%</Text>
                    </View>
                </View>
                <View style={[styles.tableRow, styles.lastTableCell]}>
                    <View style={styles.tableCell}>
                        <Text style={styles.tableTitle}>Pontos médios por jogo</Text>
                        <Text style={styles.tableValue}>{averageScoreUs}%</Text>
                    </View>
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
    textStatistic: {
        fontSize: 35,
        color: 'white',
        alignItems: 'center',
        textAlign: 'center',
    },
    tableRow: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 10,
    },
    tableCell: {
        flexBasis: '48%',
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    tableTitle: {
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },
    tableValue: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    lastTableCell: {
        borderBottomWidth: 0,
    },
});