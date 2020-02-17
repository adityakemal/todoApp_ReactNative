import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>
                box one</Text>
            <Text style={styles.box2}>
                box two</Text>
            <Text style={styles.box3}>
                box three</Text>
            {/* <Text style={styles.box4}>
                box four</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //    padding : 80,
        // flexDirection: 'column', //default
        flexDirection: 'row', //default
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#ddd',
        alignItems : 'center',
        justifyContent : 'space-around', 
        // opt: 'flex-start', 'flex-end', 'space-between' : make space between box, flex make content in flex container float in the middle
        // opt: 'space-around' make space around corner
        // flex: 1, //make all spread in screen every corner
    },
    box1: {
        // flex : 1,
        backgroundColor: 'violet',
        padding: 5,
    },
    box2: {
        // flex : 1,
        backgroundColor: 'gold',
        padding: 10,
    },
    box3: {
        // flex : 1,
        backgroundColor: 'pink',
        padding: 15
    },
    box4: {
        flex : 1,
        backgroundColor: 'coral',
        padding: 20
    }
});
