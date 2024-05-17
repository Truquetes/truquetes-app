import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SaveGameModal = ({ visible, onRequestClose, onSaveGame, onContinuePlaying }) => {
  return (
    
    <Modal
      visible={visible}
      transparent={true}
      animationType='fade'
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Deseja salvar o jogo ou continuar jogando?</Text>
          <View style={styles.buttonContainer}>
            
            <TouchableOpacity 
              onPress={onSaveGame} 
              style={[styles.modalButton, { backgroundColor: 'green' }]}
            >
              <Text style={styles.buttonText}>Salvar o jogo</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={onContinuePlaying} 
              style={[styles.modalButton, { backgroundColor: '#D9D9D9' }]}
            >
              <Text style={styles.buttonText}>Continuar jogando</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalButton: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    color: 'black',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export { SaveGameModal };