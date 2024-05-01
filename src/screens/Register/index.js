import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';
import { CustomTextInput } from '../../components/CustomTextInput'
import { useNavigation } from '@react-navigation/native';

export const Register = () => {
  const navigation = useNavigation();

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
        />

        <CustomTextInput
          placeholder={'seuEmail@email.com'}
          height={35}
        />

        <CustomTextInput
          height={35} 
          placeholder={'password'}
        />

        <CustomButton
          text={'Cadastrar'}
          backgroundColor='green'
          color={'black'}
          onPress={() => navigation.navigate('Main')}
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