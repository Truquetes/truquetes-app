import React from 'react';
import { View, StyleSheet } from 'react-native';

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
        backgroundColor: 'green', // Cor de fundo para a área fora do container
    },
    container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#C0C0C0',
        padding: 20,
        paddingTop: 100, // Espaço para a parte superior arredondada
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0, 
    },
});

export { CustomContainer };