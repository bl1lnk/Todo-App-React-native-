import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
        flexDirection:'row',
        justifyContent:"flex-end",
        paddingTop: 40,
        alignItems:"center",
        backgroundColor: "#ddd",
      
    },
    boxOne:{
        flex:3,
        backgroundColor:"violet",
        padding:10
    },
    boxTwo:{
        flex:1,
        backgroundColor:"gold",
        padding:20
    },boxThree:{
        flex:1,
        backgroundColor:"coral",
        padding:30
    },
    boxFour:{
        flex:1,
        backgroundColor:"skyblue",
        padding:40
    }
})
export default Sandbox