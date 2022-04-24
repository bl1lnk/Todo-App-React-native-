import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style= {styles.title}>My Todos 📝</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Header