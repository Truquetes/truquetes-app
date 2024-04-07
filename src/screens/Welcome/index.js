import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Logo } from '../../components/Logo';
import { CustomButton } from '../../components/CustomButton';

export const Welcome = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <Text style={[styles.textLogo, styles.topContent]}>Truquetes</Text>
      <Logo height={200} width={screenWidth} style={styles.topContent}/>
      <CustomContainer height="70%">
        <Text style={[styles.textTexto,]}>
          Para iniciar um novo jogo, acessar jogos anteriores ou ver estatísticas, faça o login ou crie uma conta
        </Text>
        <CustomButton text={'Login'} color={'#054A18'}>

        </CustomButton>
      </CustomContainer>
    </View>
  );
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
    marginTop: 200, 
    alignItems: 'center',
  },
  textTexto: {
    textAlign: 'center', 
    textAlignVertical: 'center',
    color: 'black', 
    fontSize: 50, 
    maxWidth: 600,
    maxHeight: 300,
    alignSelf: 'center'
  }
});