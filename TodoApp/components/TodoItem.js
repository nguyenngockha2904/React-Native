import React from 'react';
import { StyleSheet, Text,View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default function TodoItem({item,pressHandler}){

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
         
            <View style={styles.k}>
         <MaterialIcons name="delete" size={32} color="#333" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
            
            
           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    k:{
        textAlign:'center',
        padding :16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth: 3, 
        borderStyle: 'dashed', 
        borderRadius: 10,
        color:'#fff',
        fontWeight:'bold',
        backgroundColor:'coral',
        flexDirection:'row',
        
    },
    itemText:{
        marginLeft:10,
        

    },
    
})