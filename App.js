import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'beli anduk', key: '1' },
    { text: 'beli odol', key: '2' },
    { text: 'makan', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos( (prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>


      <StatusBar backgroundColor="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal:40,
  },
  list: {
    marginTop:20,
  }
});
