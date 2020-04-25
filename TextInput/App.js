import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [name , setname ]=useState(' Kha ');
  const [age , setAge ]=useState('21');
  const changeName =(ke) => {
    setname(ke);
  };
  const changeAge =(ke) => {
    setAge(ke);
  };
  return (
    <View style={styles.container}>
      <Text>Enter name : </Text>
      <TextInput 
      multiline

      style={styles.input}
      placeholder='e.g kha' 
      onChangeText={(val)=> setname(val)}
      //onChangeText={(val)=> changeName(val)}

       />
       <Text>Enter age : </Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g 99' 
      onChangeText={(val)=> setAge(val)}
      //onChangeText={(val)=> changeAge(val)}
      
       />
      <Text>name :{name}, age : {age} </Text>
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
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,

  },
});
