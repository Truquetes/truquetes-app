import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RadioButton = ({ defaultOption, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  useEffect(() => {
    onSelect(selectedOption);
  }, [selectedOption, onSelect]);

  const handleSelect = (option) => {
    setSelectedOption(option.value);
  }

  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.optionContainer}
          onPress={() => handleSelect(option)}
        >
          <Ionicons
            name={selectedOption === option.value ? 'radio-button-on' : 'radio-button-off'}
            size={24}
            color="black"
          />
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    backgroundColor:'#AFD1B7',
    borderRadius:3
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export { RadioButton };