import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';
import { CustomTextInput } from '../../components/CustomTextInput'
import { useNavigation } from '@react-navigation/native';
import { register } from '../../utils/userService'

export const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    register(name, email, password, navigation);
  };

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
          onPress={handleRegister}
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