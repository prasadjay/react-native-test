import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends React.Component{
    render(){
      return(
        <View style={{flex: 1}}>
          <Header headerText={'My Albums'}/>
          <AlbumList />
        </View>
      );
    }
}



export default App;