import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

export const PreLoader = () => {
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
      <View style={styles.headerContainer}>
        <Header />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054A18',
    alignContent: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    alignItems: 'center',
  },
})