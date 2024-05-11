import { Modal, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SecondaryHeader } from '../../components/SecondaryHeader';
import { CustomTextInput } from '../../components/CustomTextInput'
import { CustomButton } from '../../components/CustomButton'
import { TeamSelection } from '../../components/TeamSelection'
import { useState } from 'react';

export const Marcador = () => {
  const [numPlayers, setNumPlayers] = useState(4);
  const [scoreUs, setScoreUs] = useState(0);
  const [matchesScoreUs, setMatchesScoreUs] = useState(0);
  const [scoreThem, setScoreThem] = useState(0);
  const [matchesScoreThem, setMatchesScoreThem] = useState(0);
  const [trucoValue, setTrucoValue] = useState(1);
  const [buttonText, setButtonText] = useState('Truco!');
  const [buttonClicks, setButtonClicks] = useState(0);
  const [showModal, setShowModal] = useState(false);
;


  const handleTeamSelection = (option) => {
    console.log('A OPÇÃO AQUI É '+ option)
      setNumPlayers(option === 'S' ? 2 : 4);
  };

  const handleTrucoButtonClick = () => {
    setButtonClicks(buttonClicks + 1);
    if (buttonClicks === 0) {
      setButtonText('SEIS Poca Foia!');
      setTrucoValue(3);
    } else if (buttonClicks  === 1) {
      setButtonText('NOVE Fancãozeiro!');
      setTrucoValue(6);
    } else if (buttonClicks === 2) {
      setButtonText('Doze Portão de cemitério!');
      setTrucoValue(9);
    } else if (buttonClicks === 3) {
      setTrucoValue(12);
    } else if (buttonClicks === 4) {
      setButtonText('TRUCO');
      setTrucoValue(1);
      setButtonClicks(0);
    }
  };

  const increaseScore = (team) => {
    let trucoScore;
    if (trucoValue >= 3) {
      trucoScore = trucoValue;
      setButtonText('TRUCO');
      setTrucoValue(1);
      setButtonClicks(0);
    } else {
      trucoScore = 1;
    }

    if (team === 'us' && scoreUs < 12) {
        setScoreUs(prevScoreUs => Math.min(prevScoreUs + trucoScore, 12));
    } else if (team === 'them' && scoreThem < 12) {
        setScoreThem(prevScoreThem => Math.min(prevScoreThem + trucoScore, 12));
    }

    if (team === 'them' && scoreThem + trucoScore === 12) {
      setMatchesScoreThem(matchesScoreThem + 1);
      setShowModal(true);
    } else if (team === 'us' && scoreUs + trucoScore === 12) {
      setMatchesScoreUs(matchesScoreUs + 1);
      setShowModal(true);
    }
  
};

  const decreaseScore = (team) => {
    if (team === 'us' && scoreUs != 0) {
      setScoreUs(scoreUs - 1);
    } else if (team === 'them' && scoreThem != 0) {
      setScoreThem(scoreThem - 1);
    }
  };

  const handleSaveGame = () => {
    // TODO: adicionar implementação para salvar do firebase
    setShowModal(false);
    setScoreUs(0);
    setScoreThem(0);
  };

  const handleContinuePlaying = () => {
    if ( scoreUs === 12) {
      setMatchesScoreUs(matchesScoreUs - 1);
    } else if (scoreThem === 12){
      setMatchesScoreThem(matchesScoreThem - 1);
    }
    setShowModal(false);
  };

    return (
        <View style={styles.container}>
            <SecondaryHeader />

            <View style={styles.viewRbInput}>
              <TeamSelection onSelect={handleTeamSelection} />

              <View style={styles.viewInput}>
                  {[...Array(numPlayers)].map((_, index) => (
                      <CustomTextInput key={index} placeholder={`jogador${index + 1}`} />
                  ))}
              </View>
            </View>

            <View style={styles.marcadorView}>
                <Text style={styles.textMarcador}>Nós</Text>
                <Text style={styles.textMarcador}>Eles</Text>
            </View>

            <View style={styles.marcadorPontos}>
                <TouchableOpacity 
                  style={styles.buttonMenos}
                  onPress={() => decreaseScore('us')}
                >
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>

                <Text style={styles.textPontos}>{scoreUs}</Text>
                <Text style={styles.textPontos}>{scoreThem}</Text>
                
                <TouchableOpacity 
                  style={styles.buttonMenos}
                  onPress={() => decreaseScore('them')}
                >
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.botoesAd}>
                <TouchableOpacity 
                  style={styles.containerB}
                  onPress={() => increaseScore('us')}
                >
                    <Image source={require('../../assets/Ouro.png')} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textP}>{'+' + trucoValue}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.containerB}
                  onPress={() => increaseScore('them')}
                >
                    <Image source={require('../../assets/Ouro.png')} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textP}>{'+' + trucoValue}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <CustomButton  
              backgroundColor='#AFD1B7'
              color='black' 
              text={buttonText}
              onPress={handleTrucoButtonClick}
            />
            
            <View style={styles.vitoria}>
                <Text style={styles.contador}>{matchesScoreUs}</Text>
                <Text style={styles.contador}>Vitórias</Text>
                <Text style={styles.contador}>{matchesScoreThem}</Text>
            </View>

            <Modal
              visible={showModal}
              transparent={true}
              animationType='fade'
              onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Deseja salvar o jogo ou continuar jogando?</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={handleSaveGame} style={[styles.modalButton, { backgroundColor: 'green' }]}>
                                <Text style={styles.buttonText}>Salvar Jogo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleContinuePlaying} style={[styles.modalButton, { backgroundColor: 'blue' }]}>
                                <Text style={styles.buttonText}>Continuar Jogando</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

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
    //margin:15,
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
    fontSize: 90,
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo opaco para indicar modal
  },
  modalContent: {
      backgroundColor: '#fff', // Cor de fundo do modal
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
  },
  modalText: {
      marginBottom: 20,
      textAlign: 'center',
      fontSize: 16,
      color: '#000', // Cor do texto dentro do modal
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
  },
  modalButton: {
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 5,
  },
  buttonText: {
      color: '#fff', // Cor do texto dos botões
      fontSize: 16,
  },
});