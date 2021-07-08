import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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

  const [people,setPeople]=useState([
    {name:'shaun', key:'1'},
    {name:'yoshi', key:'2'},
    {name:'mario', key:'3'},
    {name:'luigi', key:'4'},
    {name:'peach', key:'5'},
    {name:'toad', key:'6'},
    {name:'bower', key:'7'},

  ]);

  return (
    <View style={styles.container}>
      
      <ScrollView>
        { people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}> {item.name} </Text>
            </View>
          ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 35,
    padding: 30,
    backgroundColor: 'gray',
    fontSize: 24
  }
});
