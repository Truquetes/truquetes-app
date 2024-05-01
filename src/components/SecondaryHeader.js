import React from 'react';
import { Logo } from './Logo';
import { Dimensions, Text, View, StyleSheet } from 'react-native';

const SecondaryHeader = () => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.topContent}>
            <Text style={styles.textLogo}>Truquetes</Text>
            <Logo height={20} width={screenWidth} />
        </View>
    );
};

const styles = StyleSheet.create({
    topContent: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
    },
    textLogo: {
        textAlign: 'center', 
        color: 'white', 
        fontSize: 20, 
    },
});

export { SecondaryHeader };