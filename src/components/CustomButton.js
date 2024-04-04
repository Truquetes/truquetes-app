import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';

const CustomButton = ({ text, backgroundColor, color, onPress }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button title={text} onPress={onPress} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
});

export { CustomButton };