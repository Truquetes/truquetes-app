import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions,TouchableOpacity, Image } from 'react-native'
import { Logo } from '../../components/Logo';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from '../../components/RadioButton';
import {CustomTextInput} from '../../components/CustomTextInput'
import {CustomButton} from '../../components/CustomButton'

export const Marcador = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Text style={styles.textLogo}>Truquetes</Text>
                <Logo height={20} width={screenWidth} />
            </View>    
            <View style={styles.viewRbInput}>
                <View style={styles.viewrb}> 
                    <RadioButton options={[
                        { label: 'Solo', value: 'S' },
                        { label: 'Duplas', value: 'D' },
                    ]}  
                    onSelect={(option) => console.log('Opção selecionada:', option)}
                    />
                </View>
                <View style={styles.viewInput}>
                    <CustomTextInput placeholder={'jogador2'}></CustomTextInput>
                    <CustomTextInput placeholder={'jogador3'}></CustomTextInput>
                    <CustomTextInput placeholder={'jogador4'}></CustomTextInput>
                </View>
            </View>
            <View style={styles.marcadorView}>
                <Text style={styles.textMarcador}>Nós</Text>
                <Text style={styles.textMarcador}>Eles</Text>
            </View>
            <View style={styles.marcadorPontos}>
                <TouchableOpacity style={styles.buttonMenos}>
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
                <Text style={styles.textPontos}>0</Text>
                <Text style={styles.textPontos}>0</Text>
                <TouchableOpacity style={styles.buttonMenos}>
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botoesAd}>
                <TouchableOpacity style={styles.containerB}>
                    <Image source={require('../../assets/Ouro.png')} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textP}>{'+1'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerB}>
                    <Image source={require('../../assets/Ouro.png')} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textP}>{'+1'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <CustomButton  color='#AFD1B7' text='Truco!' onPress={() => {}} />
            
            <View style={styles.vitoria}>
                <Text style={styles.contador}>0</Text>
                <Text style={styles.contador}>Vitórias</Text>
                <Text style={styles.contador}>0</Text>
            </View>
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
  viewRbInput:{
    margin:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:40
  },
  viewrb:{
    justifyContent:'center',
    alignItems: 'center',
    marginLeft:20,
    backgroundColor:'#D9D9D9',
    borderRadius:10,
    maxHeight:90,
    maxWidth: 90
  },
  viewInput:{
    backgroundColor:'#D9D9D9',
    maxHeight:200,
    width:200,
    borderRadius:10,
    paddingLeft:5,
    paddingRight:5
  },
  marcadorPontos:{
    margin:50,
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color:'white'
  },
  marcadorView:{
    margin:20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    color:'white'
  },
  textMarcador:{
    textAlign: 'center', 
    color: 'white', 
    fontWeight:'500',
    fontSize: 50,
  },
  textPontos:{
    margin:20,
    textAlign: 'center', 
    color: 'white', 
    fontWeight:'500',
    fontSize: 100,
  },
  buttonMenos:{
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  containerB: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  textP: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  textContainer:{
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botoesAd:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom:20
  },
  vitoria:{    
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contador:{
    marginTop:20,
    fontSize:50,
    color: 'white'
  }
});