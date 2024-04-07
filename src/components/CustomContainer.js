import React from 'react';
import { View, StyleSheet, useWindowDimensions  } from 'react-native';

const CustomContainer = ({ children, height }) => {
    return (
      <View style={[styles.background, {height: height}]}>
        <ContainerWithBackground height={height}>{children}</ContainerWithBackground>
      </View>
    );
};

const ContainerWithBackground = ({ children, height }) => {
  return (
    <View style={[styles.container, {height: height}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#054A18', // Cor de fundo para a área fora do container
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    container: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#D9D9D9',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0, 
    },
});

export { CustomContainer };
