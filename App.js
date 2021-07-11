import React,{useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import Header from './header';
import TodoItems from './todoItems';
import AddTodo from './addTodo';

export default function App(){
  const [todos, setTodos] = useState([
    {text: 'task1', key: '1'},
    {text: 'task2', key: '2'},
    {text: 'task3', key: '3'}
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()}
        .prevTodos
      ]
    });
  }
  
  return(
    <View style={StyleSheet.container}>
      <Header/>
      <View style={StyleSheet.content}>
        <AddTodo/>
        <View style={StyleSheet.list}>
          <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItems 
            item={item}
            pressHandler={pressHandler}
            />
          )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});