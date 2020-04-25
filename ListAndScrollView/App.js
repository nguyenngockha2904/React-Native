import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,FlatList ,TouchableOpacity} from 'react-native';

export default function App() {
  const [people,serPeople] = useState([
    {name :'Nguyễn kha',id:'1'},
    {name :'Nguyễn A',id:'2'},
    {name :'Nguyễn B',id:'3'},
    {name :'Nguyễn C',id:'4'},
    {name :'Nguyễn D',id:'5'},
    {name :'Nguyễn E',id:'6'},
    {name :'Nguyễn F',id:'7'},
    {name :'Nguyễn G',id:'8'},
    {name :'Nguyễn H',id:'9'},
    {name :'Nguyễn L',id:'10'},

  ]);
  const pressHander = (id) =>{
    console.log(id);
    serPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id);
    })
  }
  return (
    <View style={styles.container}>
      {
      ///flatList
      <FlatList
      numColumns= {2}
      keyExtractor={(item) => item.id }
        data={people}
        renderItem={({item}) => (
          //sự kiện click các view 
          <TouchableOpacity  onPress={() =>pressHander(item.id)}>
          <Text style ={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      
      />
      
      /////ScrollView list
      //  <ScrollView>
      
      //  {people.map((item) => {
      //   return (
      //     <View key={item.key}>
      //       <Text style ={styles.item}>{item.name}</Text>
        
      //     </View>
      //   )
      // })}
      
      // {people.map(item =>(
      //   <View key={item.key}>
      // <Text style={styles.item}>{item.key}</Text>
      // </View>
      // ))}
      
      // </ScrollView> 
      }
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal:20,
   // alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding:30,
    backgroundColor:'pink',
    fontSize: 24,
    marginHorizontal:10 ,
    marginTop:24,
  }
});
