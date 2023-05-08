import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const App = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [carro, setCarro] = useState('');
  const [deficiencia, setDeficiencia] = useState('');
  const [local, setLocal] = useState('');
  const [impostoTotal, setImpostoTotal] = useState('');
  const [impostoA, setImpostoA] = useState('');
  const [impostoB, setImpostoB] = useState('');
  const [impostoC, setImpostoC] = useState('');
  const [combustivel, setICombustivel] = useState('');



}

const verificarImposto = (idade, carro, combustivel, local, deficiencia, impostoTotal, impostoA) => {
  if (combustivel = gasolina) {
    carro * 0.10; impostoA
  } else if (combustivel = alcool) {
    carro * 0.8; impostoA
  }
  if (idade > 65) {
    impostoA * 0.4
  } else if (deficiencia = sim) {
    impostoA * 0.6
  }
  //if(idade > 65 || deficiencia = sim){}
}



<View style={styles.container}>
  <Text style={styles.label}>Digite o seu nome:</Text>
  <TextInput style={styles.input} value={nome} onChangeText={(text) => setNome(text)} />
  <Text style={styles.label}>Digite sua idade:</Text>
  <TextInput style={styles.input} value={idade} onChangeText={(text) => setIdade(text)} keyboardType="numeric" />
  <Text style={styles.label}>Digite o valor:</Text>
  <TextInput style={styles.input} value={carro} onChangeText={(text) => setCarro(text)} keyboardType="numeric" />
  <Text style={styles.label}>Tem alguma deficiencia?</Text>
  <TextInput style={styles.input} value={deficiencia} onChangeText={(text) => setDeficiencia(text)} />
  <Text style={styles.label}>Digite onde voce mora:</Text>
  <TextInput style={styles.input} value={local} onChangeText={(text) => setLocal(text)} />
  <Text style={styles.label}>Qual o tipo de combustivel?</Text>
  <TextInput style={styles.input} value={combustivel} onChangeText={(text) => setICombustivel(text)} />

</View>






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 16,
    padding: 8,
  },
});
