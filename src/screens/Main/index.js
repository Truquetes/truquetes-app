import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { CustomContainer } from '../../components/CustomContainer'
import { SecondaryHeader } from '../../components/SecondaryHeader';
import { ImageButton } from '../../components/ImageButton';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../database/firebaseConnection';

export const Main = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('carregando...')

  useEffect(() => {

    async function getNome() {
      await db.ref("users/name").on('value', (snapshot) => {
        setNome(snapshot.val());
      }) 
    }

    getNome();

  }, [])

  return (
    <View style={styles.container}>
      
      <SecondaryHeader />

      <View style={styles.testeContainer}>
        
        <View style={styles.avatarContainer}>
          <Image source={require('../../assets/Avatar.jpg')} style={styles.imagem} />
        </View>

        <Text style={styles.textAvatar}>Bem Vindo {nome}</Text>

      </View>

      <CustomContainer height="90%">
        <ImageButton imageSource={require('../../assets/Ouro.png')} buttonText='Iniciar novo jogo' onPress={()=> navigation.navigate('Marcador')}/>
        <ImageButton imageSource={require('../../assets/Copa.png')} buttonText='Estatísticas' onPress={()=> navigation.navigate('Statistic')}/>
        <ImageButton imageSource={require('../../assets/Espada.png')} buttonText='Histórico de Jogos' onPress={()=> navigation.navigate('GameHistory')}/>
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
  testeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20, 
    marginTop: 20,
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
});