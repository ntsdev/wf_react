import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FetchLocation from './components/FetchLocation';
//import UsersMap from './components/UsersMap';

export default class App extends React.Component {
  getUserLocationHandler = () => 
  {
     navigator.geolocation.getCurrentPosition(position =>  {
       console.log(position);
     }, err => console.log(err));
  }
  render() {
    return (
      <View style={styles.container}>
         <FetchLocation onGetLocation={this.getUserLocationHandler} />
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#344955',
    width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center'
  },
});
