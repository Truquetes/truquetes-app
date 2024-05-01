import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { SecondaryHeader } from '../../components/SecondaryHeader';

export const Statistic = () => {

    return(
        <View style={styles.container}>
            
            <SecondaryHeader />
            
            <View style={styles.centerContent}>
                <Text style={styles.textStatistic}>Estatísticas</Text>
            </View>

            <CustomContainer height="90%">
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.tableTitle}>Partidas jogadas</Text>
                        <Text style={styles.tableValue}>1000</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.tableTitle}>Vitórias</Text>
                        <Text style={styles.tableValue}>500</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.tableTitle}>Derrotas</Text>
                        <Text style={styles.tableValue}>500</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.tableTitle}>Desempenho</Text>
                        <Text style={styles.tableValue}>50%</Text>
                    </View>
                </View>
                <View style={[styles.tableRow, styles.lastTableCell]}>
                    <View style={styles.tableCell}>
                        <Text style={styles.tableTitle}>Pontos médios por jogo</Text>
                        <Text style={styles.tableValue}>7</Text>
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
        fontSize:35,
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