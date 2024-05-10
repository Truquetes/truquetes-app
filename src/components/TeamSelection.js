import React, { useState } from 'react';
import { RadioButton } from './RadioButton';
import { View, StyleSheet  } from 'react-native';

const TeamSelection = ({onSelect}) => {
    return (
        <View style={styles.container}>
            <View style={styles.radioContainer}>
                <RadioButton
                    options={[
                        { label: 'Solo', value: 'S' },
                        { label: 'Dupla', value: 'D' },
                    ]}
                    defaultOption='D'
                    onSelect={onSelect}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    },
    radioContainer: {
        borderWidth: 1, 
        backgroundColor:'#D9D9D9',
        borderColor: 'black', 
        borderRadius: 10,
        maxHeight: 90,
        maxWidth: 90,
    },
})

export { TeamSelection };