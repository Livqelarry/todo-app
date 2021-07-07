import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // "name" adalah nama variabel yang bisa dipanggil
  // dan "setName" adalah nama yang dipanggil untuk mengganti isi variable "name"
  const [name, setName] = useState('Praditya');
  const [person, setPerson] = useState(
    {name: 'Bob', age: 80}
  )

  // ini adalah fungsi untuk menjalankan button
  // untuk memberi fungsi di button dengan cara onPress={namaFungsi}
  const clickHandler = () => {
    setName('chun-li');
    setPerson({name:'Livqelarry', age:17})
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>My name is {name}</Text>
        <Text style={styles.boldText}>His name is {person.name} and his age is {person.age}</Text>
      </View>
      <View styles={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
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
  header:{
    backgroundColor: 'gray',
    padding: 20,
    marginBottom: 40,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
