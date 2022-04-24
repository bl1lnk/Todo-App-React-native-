import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useState} from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

export default function App() {

  const [todos , setTodos] = useState([
    { text: 'buy coffe', key: '1'},
    { text: 'create an apps', key: '2'},
    { text: 'play on the switch', key: '3'}
  ]);
  return (
   // <Sandbox />

    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}> 
       <View style={styles.container}>
      
       <Header  />
       <View style={styles.content}>
         <AddTodo setTodos={setTodos}  todos={todos} />
           <View style={styles.list}>
             <FlatList 
               data= {todos}
               renderItem={({item})=>(
                <TodoItem  item={item} todos={todos}  setTodos={setTodos}/>
               )}
             />
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

  },
  content:{
    padding: 40,
    backgroundColor:'#ddd',
    flex:1
  },
  list:{
    marginTop: 20,
    //backgroundColor:"yellow",
    flex:1
  }
});
