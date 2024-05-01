import React from 'react';
import { Logo } from './Logo';
import { Dimensions, Text, View, StyleSheet } from 'react-native';

const Header = () => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View>
            <Text style={[styles.textLogo, styles.topContent]}>Truquetes</Text>
            <Logo height={200} width={screenWidth} style={styles.topContent}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#054A18', 
    },
    textLogo: {
        textAlign: 'center', 
        textAlignVertical: 'center', 
        color: 'white', 
        fontSize: 45, 
    },
    topContent: {
        marginTop: 100, 
        alignItems: 'center',
    },
});

export { Header };