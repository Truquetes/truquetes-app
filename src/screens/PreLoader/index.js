import React, { useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../../components/Logo';

export const PreLoader = () => {
  //const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navegar para a próxima tela após 3 segundos
      //Validar com o professor como fazer um PreLoader sem essa gambiarra
      navigation.navigate('Welcome');
    }, 3000); // 3000 milissegundos = 3 segundos


    return () => clearTimeout(timer);
  }, []); 

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.text}>
          Truquetes
        </Text>
        <Logo height={200} width={'100%'}>

        </Logo>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#054A18',
  },
  containerLogo:{
    flex:2,
    alignContent:'center',
    justifyContent:'center'
  },
  text: {
    textAlign: 'center', 
    textAlignVertical: 'center', 
    color: 'white', 
    fontSize: 45, 
  },
})