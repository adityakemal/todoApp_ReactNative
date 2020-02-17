import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Header from './components/Header.js'
import TodoItem from './components/TodoItem.js'
import AddTodo from './components/AddTodo.js'
import Sandbox from './components/Sandbox.jsx'



export default function App() {
    const [todos,
        setTodos] = useState([
        {
            text: 'buy coffee',
            key: '1'
        }, {
            text: 'learn node js for sure',
            key: '2'
        }, {
            text: 'teach the other people',
            key: '3'
        }, {
            text: 'make a surprise birthday',
            key: '4'
        }
    ])

    const pressHandler = (key) =>{
      setTodos((prefValue)=>{
        return prefValue.filter(val => val.key !== key )

      })
    }

    const submitHandler = (val) =>{
        if (val.length > 3) {
            setTodos((prefValue)=>{
                return [{ text : val, key : Math.random().toString()}, ...prefValue ]
            })  
        }else{
            Alert.alert('OOPPS!',' Todos harus lebih dari tiga karakter!', [
                { text : 'YA, SAYA MENGERTI!', onPress : ()=> console.log('alert closed!!!')}
            ])
        }
        
      }
    

    return (
        // <Sandbox />
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.container}>
                {/* header */}
                <Header />
                <View style={styles.content}>
                    {/* content  */}
                    <AddTodo functAdd={submitHandler}/>
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({item}) => (
                            <TodoItem item={item} pressHandler={pressHandler} />
                        )}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center', justifyContent: 'center',
    },
    content: {
      padding : 40,
    //   backgroundColor : 'skyblue', 
      flex : 1
    },
    list :{
      marginTop : 10,
      paddingBottom : 10,
    //   backgroundColor : 'pink',
      flex : 1
    }
});
