import { View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native'
import React, {useState} from 'react'

const AddTodo = ({setTodos, todos}) => {

    
    const [text, setText] = useState("");
    const changeHandler = (val) => {
        setText(val);
    }

    const onPressHandler = () =>{
        //{ text: 'create an apps', key: '2'},
        /*
        const min = 1;
        const max = 1000000;
        const key = min + Math.random() * (max - min);*/
        if(text.length <= 2){
            return Alert.alert("Opps", "Todos text length  must be atleast 3 character",[
                {text:"Understood", onPress: ()=> console.log("alert closed")}
            ])
        }

        const key = Math.max(...todos.map(item => item.key), 0) + 1;
        setTodos([ {text, key},...todos])
    }

  return (
    <View>
     <TextInput  style={styles.input}
        placeholder='new todo ...'
        onChangeText={changeHandler} />
        <Button onPress={onPressHandler}  title="add todo" text='add todo' color="coral" />
  
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
export default AddTodo