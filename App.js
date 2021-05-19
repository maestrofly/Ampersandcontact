import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import face from './assets/face.jpg';
  
 function App() {
      return <View style={styles.container}>
        <Text style={styles.textline}>hello</Text>
             <Image source={face} style={styles.image}/>
      </View>
  }
  
  const styles = StyleSheet.create({
      container:{
          flex:1,
        backgroundColor:'blue',
      },
      textline:{
        marginTop:60,
        

      },
      image:{
        width:200,
        height:200
      },
  
  });
  
  export default App;