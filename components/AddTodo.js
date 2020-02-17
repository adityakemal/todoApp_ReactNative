import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, TouchableHighlight} from 'react-native';

export default function AddTodo({functAdd}) {
    const [text , setText] = useState('')
    const changeHandler = (val) =>{
        setText(val)
    }
    

    return (
        <View >
            <TextInput 
            style={styles.input}
            onChangeText={changeHandler}
            placeholder='add todo..'
            />
            <TouchableHighlight
            style={styles.button}
            onPress={()=>functAdd(text)
            }
            >
                <Text  style={styles.text}>+ Add Todos</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize : 18,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'coral',
        marginBottom : 20,
    },
    button : {
        backgroundColor : 'coral',
        padding : 20,
        borderWidth: 2,
        borderRadius : 10,
        borderStyle : 'solid',
        borderColor : 'coral'
    },
    text : {
        textAlign : 'center',
        fontSize : 18,
        fontWeight : '700',
        color : '#fff'
    }
});
