import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
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

    //Valida se o nome é vazio
    if(name === ''){
      alert('O nome deve ser informado')
      return
    }
    
    //Faz o cadastro do usuário 
    await auth.createUserWithEmailAndPassword(email, password)
    .then((value) => {
      db.ref('users').child(value.user.uid).set({
        name: name
      })

      //Informa que o cadastro foi realizado e navega para tela principanl
      alert('Usuário cadastrado com sucesso!')
      navigation.navigate('Main')
    })
    .catch((error)=>{

      //Faz os tratamentos de erros específicos do auth do firebase
      switch (error.code) {
        case "auth/email-already-in-use":
          alert('O endereço de e-mail fornecido já está em uso!')
          break;
        case "auth/invalid-email":
          alert('O endereço de e-mail fornecido é inválido!')
          break;
        case "auth/weak-password":
          alert('A senha fornecida é muito fraca! A senha deve conter mais de 6 caracteres.')
          break;
        case "auth/network-request-failed":
          alert('Aconteceu um problema de conexão ao tentar cadastrar o novo usuário!')
          break;
        default:
          alert('Aconteceu um erro inesperado ao realizar o cadastro! Contate o Admin do sistema!')
          console.log(error)
          break;
    }
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
          placeholder={'Password'}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
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