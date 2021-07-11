import React,{useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
} from 'react-native';

export default function addTodo({submitHandler}) {
    const [text, setText] = useState('');
    const changeHandler = () => {
        setText(val);
    }
    return (
        <View>
            <TextInput
            style={StyleSheet.input}
            placeholder= 'new task!'
            onChangeText={(val) => changeHandler(val)}
            />
            <Button
            onPress={() => submitHandler(text)}
            title='ADD'
            color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
  });