import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({item, pressHandler}) {
   
    return (
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <View style={styles.list}>
                <MaterialIcons  name='delete' size={24} color='maroon'/>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    list : {
        textAlign : 'center',
        fontWeight :'700',
        color : 'gray',
        borderColor :'coral',
        borderWidth : 1,
        borderRadius : 10,
        borderStyle : 'dashed',
        marginTop : 20,
        padding : 20,
        flexDirection : 'row',
        alignItems : 'center'
    },
    text:{
        fontSize : 18,
        marginLeft : 10
    }
});
