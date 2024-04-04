import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CustomTextInput } from './src/components/CustomTextInput'
import { CustomButton } from './src/components/CustomButton'
import { CustomContainer } from './src/components/CustomContainer'

export default function App() {
  return (

    <CustomContainer height="80%">
      <View style={styles.container}>
        <Text>Truquetes APP - Teste</Text>
        <StatusBar style="auto" 
      />
        
        <CustomTextInput
          leftIconName="ios-person"
          rightIconName="ios-checkmark"
          height={30}
          width={300}
          placeholder="Nome"
        />

        <CustomTextInput
          leftIconName="ios-person"
          rightIconName="ios-checkmark"
          width={300}
          height={30}
          placeholder="seuEmail@email.com"
        />

        <CustomButton
          text="Clique aqui"
          backgroundColor="green"
          color="black"
          onPress={() => {
            // Função a ser executada quando o botão for pressionado
          }}
        />

      </View>
    </CustomContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
});