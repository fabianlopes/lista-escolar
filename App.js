import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';


export default function App() {
  let listaInicial = [{ nome: '', preco: '' }];
  let [listaMateriais, definirListaMateriais] = useState(listaInicial);

  return (
    <View style={styles.container}>
      <Text>APP - Lista de Material Escolar</Text>
        <FlatList
          data = {listaMateriais}
          renderItem={({item}) => <Text>{item}</Text>}
        />
        <TextInput
          placeholder={'Inserir Novo Item'}
          onSubmitEditing={({nativeEvent})=>
          definirListaMateriais(listaMateriais.concat({ nome: nativeEvent.text, preco: '' }))
          }
        />
        <TextInput
          placeholder={'Inserir Novo Preço'}
          onSubmitEditing={({nativeEvent})=>
          definirListaMateriais(listaMateriais.concat(nativeEvent.text))
          }
        />

      </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
