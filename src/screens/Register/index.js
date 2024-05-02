import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';
import { CustomTextInput } from '../../components/CustomTextInput'
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../database/firebaseConnection';

export const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function register() {
    
    await auth.createUserWithEmailAndPassword(email, password)
    .then((value) => {
      db.ref('users').child(value.user.uid).set({
        name: name
      })

      alert('Usuário cadastrado com sucesso!')
      navigation.navigate('Main')
    })
    .catch((error)=>{
      alert(error)
    })

  }

  return (
    <View style={styles.container}>
      <Header />

      <CustomContainer height="90%">

        <Text style={styles.textTexto}>
          Cadastrar
        </Text>
     
        <CustomTextInput
          placeholder={'nome'}
          height={35}
          onChangeText={(text) => setName(text)}
        />

        <CustomTextInput
          placeholder={'seuEmail@email.com'}
          height={35}
          onChangeText={(text) => setEmail(text)}
        />

        <CustomTextInput
          height={35} 
          placeholder={'password'}
          onChangeText={(text) => setPassword(text)}
        />

        <CustomButton
          text={'Cadastrar'}
          backgroundColor='green'
          color={'black'}
          onPress={register}
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