import React from 'react';
import { Button, TextInput, StyleSheet } from 'react-native';
const fetchLocation = props => {
    return (
        <TextInput style={styles.inputBox}/>
    );
};
 
const styles=StyleSheet.create({
    inputBox: {
        width:'100%',
        backgroundColor : '#FFFFFF',
        borderRadius: 25,
        marginVertical: 10,
        marginHorizontal: 20,
        position: 'relative'
      }
});
export default fetchLocation;