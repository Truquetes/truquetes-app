import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { Logo } from '../../components/Logo';
import {ImageButton} from '../../components/ImageButton';
import { useNavigation } from '@react-navigation/native';

export const Main = () => {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.textLogo}>Truquetes</Text>
        <Logo height={20} width={screenWidth} />
      </View>

      <View style={styles.testeContainer}>
        <View style={styles.avatarContainer}>
          <Image source={require('../../assets/Avatar.jpg')} style={styles.imagem} />
        </View>
        <Text style={styles.textAvatar}>Bem Vindo Jairo</Text>
      </View>

      <CustomContainer height="90%">
        <ImageButton imageSource={require('../../assets/Ouro.png')} buttonText='Iniciar novo jogo' onPress={()=> navigation.navigate('Marcador')}/>
        <ImageButton imageSource={require('../../assets/Copa.png')} buttonText='Estatísticas' onPress={()=> navigation.navigate('Statistic')}/>
        <ImageButton imageSource={require('../../assets/Espada.png')} buttonText='Histórico de Jogos'/>
        <ImageButton imageSource={require('../../assets/Pau.png')} buttonText='Torneio' onPress={()=> navigation.navigate('Tournament')}/>
      </CustomContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054A18', 
  },
  topContent: {
    alignItems: 'center',
  },
  textLogo: {
    textAlign: 'center', 
    color: 'white', 
    fontSize: 20, 
  },
  testeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20, 
  },
  textAvatar: {
    fontSize:25,
    color: 'white',
    marginLeft: 20, 
  },
  avatarContainer: {
    height: 70,
    width: 70,
    borderRadius: 35, 
    overflow: 'hidden',
    justifyContent: 'center', 
    borderWidth: 2,
    borderColor:'#AFD1B7',
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
  Input: {
    marginTop: 100,
    marginBottom: 100,
  },
});