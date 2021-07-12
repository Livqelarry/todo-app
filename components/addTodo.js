import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo() {
    const [text, setText] = useState('');


    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput 
                style = {styles.input}
                placeholder='new Todo....'
                onChangeText ={changeHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 40,
        marginBottom: 10,
        paddingHorizontal: 40,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd'
    }
})