import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const CustomButton = ({ text, backgroundColor, color,onPress }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button title={text} onPress={onPress} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 220,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 10
  },
});

export { CustomButton };