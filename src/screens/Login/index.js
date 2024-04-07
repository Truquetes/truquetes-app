import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Logo } from '../../components/Logo';
import { CustomButton } from '../../components/CustomButton';
import {CustomTextInput} from '../../components/CustomTextInput'
import { useNavigation } from '@react-navigation/native';


export const Login = () => {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
          <Text style={[styles.textLogo, styles.topContent]}>Truquetes</Text>
          <Logo height={200} width={screenWidth} style={styles.topContent}/>
          <CustomContainer height="90%">
            <Text style={[styles.textTexto,]}>
            Logar
            </Text>
            <CustomTextInput
              placeholder={'seuEmail@email.com'}
            >

            </CustomTextInput>
            <CustomTextInput
              style={[styles.Input]}
              placeholder={'password'}
            >

            </CustomTextInput>
            <CustomButton 
              text={'Login'} 
              color={'#054A18'}
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
  textLogo: {
    textAlign: 'center', 
    textAlignVertical: 'center', 
    color: 'white', 
    fontSize: 45, 
  },
  topContent: {
    marginTop: 100, 
    alignItems: 'center',
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
  Input:{
    marginTop:100,
    marginBottom:100
  }
});