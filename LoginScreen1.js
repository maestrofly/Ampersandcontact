import React from 'react';
import {Text, View, Button, TextInput, StyleSheet, Image} from 'react-native';

import face from './assets/face.JPG';

function App(){
    return <View style={styles.container}>
           <Image source={face}/>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }

});

export default App;