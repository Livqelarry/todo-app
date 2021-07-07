import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  // "name" adalah nama variabel yang bisa dipanggil
  // dan "setName" adalah nama yang dipanggil untuk mengganti isi variable "name"
  const [name, setName] = useState('Praditya');
  const [age, setAge] = useState('30')

  // ini adalah fungsi untuk menjalankan button
  // untuk memberi fungsi di button dengan cara onPress={namaFungsi}
  const clickHandler = () => {
    setName('chun-li');
    setPerson({name:'Livqelarry', age:17})
  }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        multiline
        style={styles.input} 
        placeholder='Your Name'
        onChangeText={(val) => setName(val) } />

      <Text>Enter age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder='Your age'
        onChangeText={(val) => setAge(val) } />

      <Text>Name: {name}, Age: {age}</Text>
      <StatusBar style="auto" />
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
  input: {
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
