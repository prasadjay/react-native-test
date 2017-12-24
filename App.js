import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import LoginForm from './src/components/LoginForm';

class App extends React.Component{
    render(){
      return(
        <View style={{flex: 1}}>
          <Header headerText={'My Albums'}/>
          <AlbumList />
          {/*<LoginForm />*/}
        </View>
      );
    }
}



export default App;