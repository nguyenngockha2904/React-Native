import React from 'react';
import { StyleSheet, Text,View , TouchableOpacity } from 'react-native';


export default function Sandbox(){
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxfour}>four</Text>
        </View>
    )
}
const styles = StyleSheet.create({
 container :{
     //flex: 1,
     flexDirection: 'row',
     justifyContent:'space-around', 
     alignItems :'flex-end',
    paddingTop :40,
    backgroundColor: '#ddd',

 },
 boxOne:{
     flex:1,
    backgroundColor: 'violet',
    textAlign: 'center',
    padding: 10,
 },
 boxTwo:{
    flex:1,
    backgroundColor: 'gold',
    textAlign: 'center',
    padding :20,
 },
 boxThree:{
    flex:1,
    backgroundColor: 'coral',
    textAlign: 'center',
    padding : 30,
 },
 boxfour:{
    flex:1,
    backgroundColor: 'skyblue',
    textAlign: 'center',
    padding : 40 ,
 },
});