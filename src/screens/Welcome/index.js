import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Header } from '../../components/Header';
import { CustomButton } from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

export const Welcome = () => {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <Header/>
      
      <CustomContainer height="90%">
        
        <Text style={[styles.textTexto]}>
          Para iniciar um novo jogo, acessar jogos anteriores ou ver estatísticas, faça o login ou crie uma conta
        </Text>

        <CustomButton 
          text={'Login'} 
          backgroundColor='green'
          color={'black'}
          onPress={()=> navigation.navigate('Login')}
        />
        <CustomButton 
          text='Cadastrar' 
          backgroundColor='#6A9F7A'
          color={'black'}
          onPress={()=> navigation.navigate('Register')}
        />
      </CustomContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054A18', 
  },
  textTexto: {
    marginTop:60,
    textAlign: 'center', 
    color: 'black', 
    fontSize: 30, 
    maxWidth: 600,
    maxHeight: 300,
    alignSelf: 'center',
    paddingBottom: 20
  }
});