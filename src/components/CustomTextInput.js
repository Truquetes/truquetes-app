import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomTextInput = ({ leftIconName, rightIconName, placeholder, width, height}) => {
  const [text, setText] = useState('');

  return (
    <View style={[styles.container, { width: width }, {height: height}]}>
      {leftIconName && <Ionicons name={leftIconName} size={24} color="black" style={styles.icon} />}
      
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor="gray"
      />
      
      {rightIconName && <Ionicons name={rightIconName} size={24} color="black" style={styles.icon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  icon: {
    marginRight: 5,
  },
});

export { CustomTextInput };