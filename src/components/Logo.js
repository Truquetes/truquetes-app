import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const Logo = ({ height, width }) => {
  return (
    <View style={[styles.container, { height: height , width: width }]}>
      <Image 
        source={require('../assets/Logo.png')}
        style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'contain' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export { Logo };