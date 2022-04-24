import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity} from 'react-native';
import {useState} from 'react';


export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id:'1'},
    { name: 'yoshi', id:'2'},
    { name: 'marion', id:'3'},
    { name: 'john', id:'4'},
    { name: 'xad', id:'5'},
    { name: 'fan', id:'6'},
    { name: 'ted', id:'7'}
    
  ])
  
  const pressHandler = (id) =>{
      console.log(` the id  : ${id}`);
      setPeople((prevPeople)=>{
        return prevPeople.filter(person=> person.id != id)
      })
  }
  return (
    
    <View style={styles.container}>

      <FlatList 
        numColumns={2}
        keyExtractor={(item)=> item.id}
        data= {people}
        renderItem = {({item})=>(
          <View>
           <TouchableOpacity onPress={()=>pressHandler(item.id)}>
             <Text style={styles.name} >{item.name}</Text>
           </TouchableOpacity>      
          </View>
        )}
      />
      { /*people.map((item, key)=>
        (
          <View key={item.key}>
            <Text >{item.name}</Text>
            </View>
        )
      })*/}

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
  name:{
    backgroundColor:"orange",
    marginVertical: 3,
    fontSize:25,
    color: 'white',
    padding: 5,
    textAlign:'center',
    marginHorizontal: 5,
    marginTop: 24,
    
 

  }
});
