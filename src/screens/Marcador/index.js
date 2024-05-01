import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SecondaryHeader } from '../../components/SecondaryHeader';
import { CustomTextInput } from '../../components/CustomTextInput'
import { CustomButton } from '../../components/CustomButton'
import { TeamSelection } from '../../components/TeamSelection'

export const Marcador = () => {

    return (
        <View style={styles.container}>
            <SecondaryHeader />

            <View style={styles.viewRbInput}>
                <TeamSelection />

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

            <CustomButton  
              backgroundColor='#AFD1B7'
              color='black' 
              text='Truco!' 
              onPress={() => {}} 
            />
            
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
  viewInput:{
    backgroundColor:'#D9D9D9',
    maxHeight:200,
    width:200,
    borderRadius:10,
    paddingLeft:5,
    paddingRight:5
  },
  marcadorPontos:{
    margin:35,
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color:'white'
  },
  marcadorView:{
    margin:15,
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
    margin:15,
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