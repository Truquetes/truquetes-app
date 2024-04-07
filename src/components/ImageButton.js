import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const ImageButton = ({ onPress, imageSource, buttonText }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    overflow: 'hidden',
    marginLeft:20

  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    resizeMode:'cover',
    marginTop:25

  },
  text: {
    color: 'black',
    fontSize: 25,
  },
});

export { ImageButton }; // Exportando o componente corretamente