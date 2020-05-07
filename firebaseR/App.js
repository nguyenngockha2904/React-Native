import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput,ListView} from 'react-native';
import { firebaseApp } from './Components/FirebaseConfig';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.itemRef=firebaseApp.database();
    this.state={
      key:'',
      name:'',
      age : '',
    }
  }
  componentWillMount(){
    this.itemRef.ref('users').once('value',(data)=> {
      // console.log(data.toJSON());
      console.log(data);
    })
  }
  
  //insert
  setDB(){
    this.itemRef.ref('users/'+(this.state.key++)).set({
      name: this.state.name,
      age : this.state.age,
    }).then(()=> {
      console.log('inserted !');
    }).catch((error) => {
      console.log(error);
    })
    this.setState({
      key:'',
      name:'',
      age:''
    })
  }
  UpdateDB(){
    this.itemRef.ref('users/'+this.state.key).update({
      name : this.state.name,
      age: this.state.age,
    }).then(()=> {
      console.log('updated !');
    }).catch((error)=> {
      console.log(error);
    })
    this.setState({
      key:'',
      name:'',
      age:'',
      keyget:'',
    })
  }
  DeleteDB(){
    this.itemRef.ref('users/'+this.state.key).remove()
    .then(()=>{
      console.log('removed !');
    }).catch((error)=>{
      console.log(error);
    })
    this.setState({
      key:'',
      name:'',
      age:''
    });
  }
  //select
  SelectDB(){
    this.itemRef.ref('users/'+this.state.keyget).once('value',(data)=> {
      // console.log(data.toJSON());
      this.setState({
        key : data.key,
        name:data.child('name').val(),
        age: data.child('age').val(),
      })
    })
  }

  //đẩy dữ liệu 
  pushDB(){
    /// đẫy dữ liệu vào realtime database ko ghi đè
    this.itemRef.ref('KhoaHoc').child('TTDT').push({
        id: 1,
        name: 'Medical',
        icon: 's-medical',
        color: '#309397',
        colorLight: '#D8E6DC',
        todos: [
            {
                title: 'Medical 1',
                completed: true
            },
            {
                title: 'Medical 2',
                completed: false
            },
            {
                title: 'Medical 3',
                completed: true
            },
            {
                title: 'Medical 4',
                completed: true
            },
            {
                title: 'Medical 5',
                completed: true
            },
            {
                title: 'Medical 6',
                completed: false
            },
        ]
  
      })






    // this.itemRef.ref('TTDT').push({
    //   id: 1,
    //   name: 'Medical',
    //   icon: 's-medical',
    //   color: '#309397',
    //   colorLight: '#D8E6DC',
    //   todos: [
    //       {
    //           title: 'Medical 1',
    //           completed: true
    //       },
    //       {
    //           title: 'Medical 2',
    //           completed: false
    //       },
    //       {
    //           title: 'Medical 3',
    //           completed: true
    //       },
    //       {
    //           title: 'Medical 4',
    //           completed: true
    //       },
    //       {
    //           title: 'Medical 5',
    //           completed: true
    //       },
    //       {
    //           title: 'Medical 6',
    //           completed: false
    //       },
    //   ]

    // })
  }


  //lay dữ liệu
  addDB(){
    //nạp 1 lần 
    this.itemRef.ref('KhoaHoc').child('Kha').once('value',function(snapshot){
      alert(snapshot.val())
    });
    //liên tục câp nhât\
    // this.itemRef.ref('KhoaHoc').child('Kha').on('value',function(snapshot){
    //   alert(snapshot.val())
    // });
  }

  NhapDuLieu(){
    this.itemRef.ref('LapTrinh').child('NgonNguLapTrinh').push({
      Laptrinh: this.state.text,
    })
    this.setState({
      text:'',
    })
  }
  listenForItems(itemRef){
    var items=[];
    itemRef.ref('trungtamkhoapham').child('NgoNguLapTrinh').on('child_added',(dataSnapshot)=>{
      items.push({
        name:dataSnapshot.val(),
        key:dataSnapshot.key
      });
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(items),
      })
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
              style={{height:40,width:100,borderColor:'gray',borderWidth:1}}
             onChangeText={(key)=> this.setState({key})}
              value={this.state.key}
          />
         <TextInput 
              style={{height:40,width:100,borderColor:'gray',borderWidth:1}}
              onChangeText={(name)=> this.setState({name})}
              value={this.state.name}
          />
           <TextInput 
              style={{height:40,width:100,borderColor:'gray',borderWidth:1}}
              onChangeText={(age)=> this.setState({age})}
              value={this.state.age}
          />
         <TouchableOpacity onPress={()=>{this.setDB()}}>
           <Text>addDB</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{this.UpdateDB()}}>
           <Text>UpdateDB</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{this.DeleteDB()}}>
           <Text>DeleteDB</Text>
         </TouchableOpacity>
         <TextInput 
              style={{height:40,width:100,borderColor:'gray',borderWidth:1}}
              onChangeText={(keyget)=> this.setState({keyget})}
              value={this.state.keyget}
          />
          <TouchableOpacity onPress={()=>{this.SelectDB()}}>
           <Text>Get Users</Text>
         </TouchableOpacity>
         {/* <TouchableOpacity onPress={()=>{this.pushDB()}}>
           <Text>push DB</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{this.addDB()}}>
           <Text>add DB</Text>
         </TouchableOpacity> */}
       </View>


      // <View style={styles.container}>
      //   <TextInput 
      //   style={{height:40,width:100,borderColor:'gray',borderWidth:1}}
      //   onChangeText={(text)=> this.setState({text})}
      //   value={this.state.text}
      //   />
      //   <TouchableOpacity onPress={() =>this.NhapDuLieu()}>
      //   <Text>Nhập Dữ liệu</Text>
      //   </TouchableOpacity>
        

      // </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
