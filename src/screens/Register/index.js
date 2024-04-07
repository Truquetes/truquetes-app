import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Logo } from '../../components/Logo';
import { CustomButton } from '../../components/CustomButton';
import { CustomTextInput } from '../../components/CustomTextInput' // Corrigido o nome do componente importado
import { useNavigation } from '@react-navigation/native';

export const Register = () => {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
          <Text style={[styles.textLogo, styles.topContent]}>Truquetes</Text>
          <Logo height={200} width={screenWidth} style={styles.topContent}/>
          <CustomContainer height="90%">
            <Text style={[styles.textTexto,]}>
            Cadastrar
            </Text>
            <CustomTextInput
              placeholder={'nome'}
            />

            <CustomTextInput
              placeholder={'seuEmail@email.com'}
            />

            <CustomTextInput
              style={[styles.input]} // Corrigido o nome do estilo para "input"
              placeholder={'password'}
            />

            <CustomButton 
              text={'Cadastrar'} 
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
  input: {
    marginTop: 20, // Defina o valor de marginTop desejado
  }
});