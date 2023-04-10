import React, { useState } from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';

export default function App() {

  const [endereco, setEndereco] = useState(null);
  const [campocep, setCep] = useState(null);

  const endpoint = 'http://viacep.com.br/ws/${cep}/json/';
   fetch(endpoint)
   .then(resposta => resposta.json())
   .then(json => {
    const endereco = {
      logradouro: json.logradouto,
    };
    console.log(endereco);
    setEndereco(endereco);
    })
    .catch(() => {
      Alert.alert('Erro', 'Não foi possivel carregar os dados do CEP');  
    });
   }

  return (
    <View>
     
      <TextInput
      onChangeText={setCep}
      />

      <Text>Cauan Mauricio Silverio Aguiar</Text>
    {endereco != null && (
      <Text>Rua: {endereco.logradouro}</Text>
    )}
      <Button title="Consultar CEP" onPress={() => getCep(campocep)} />

      </View>
  );  


