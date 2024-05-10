import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';
import {CustomTextInput} from '../../components/CustomTextInput'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../database/firebaseConnection';

export const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function login(){

    await auth.signInWithEmailAndPassword(email, password)
    .then( ( ) => {
      navigation.navigate('Main');
    })
    .catch(( error ) => {
      switch (error.code) {
        case 'auth/invalid-email':
          alert('Endereço de e-mail inválido.');
          break;
        case 'auth/user-disabled':
          alert('Sua conta foi desativada.');
          break;
        case 'auth/user-not-found':
          alert('Usuário não encontrado.');
          break;
        case 'auth/wrong-password':
          alert('Senha incorreta.');
          break;
        default:
          alert('Ocorreu um erro durante o login. Por favor, tente novamente.');
          break;
      }
    })

  }

  return (
    <View style={styles.container}>
          
          <Header />

          <CustomContainer height="90%">
            <Text style={styles.textTexto}>
              Logar
            </Text>
            
            <CustomTextInput
              placeholder={'seuEmail@email.com'}
              height={35}
              onChangeText={(text) => setEmail(text)}
            />

            <CustomTextInput
              placeholder={'password'}
              height={35}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />

            <CustomButton 
              text={'Login'} 
              backgroundColor='green'
              color={'black'}
              onPress={login}
            />

      </CustomContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054A18', 
  },
  textTexto: {
    textAlign: 'left',
    color: 'black', 
    paddingTop: 10,
    paddingLeft: 15,
    fontSize: 30, 
    maxWidth: 600,
    maxHeight: 300,
    paddingBottom: 50
  },
});