import { View, Text, StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'
import {MaterialIcons} from "@expo/vector-icons";

const TodoItem = ({item, todos, setTodos}) => {
    const onPressHandler = (key)=>{
        setTodos((prevTodos)=>{
            return prevTodos.filter(todo => todo.key != key);
        })
    }
  return (
    <TouchableOpacity  onPress={()=>onPressHandler(item.key)}>
        <View style={styles.item}>
          
           
             <MaterialIcons  style={styles.icon} name='delete'  color='#333' size={18} />
             <Text style={styles.itemText}>{item.text}</Text>
        </View>
    
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item: {
        padding:16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius:10,   
        flexDirection:'row',
      
    }, itemText:{
        marginLeft: 10,
    }
    
})
export default TodoItem