import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';
import {CustomTextInput} from '../../components/CustomTextInput'
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
  const navigation = useNavigation();
  
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
            />

            <CustomTextInput
              placeholder={'password'}
              height={35}
            />

            <CustomButton 
              text={'Login'} 
              backgroundColor='green'
              color={'black'}
              onPress={()=> navigation.navigate('Main')}
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