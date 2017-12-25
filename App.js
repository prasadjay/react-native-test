import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import LoginForm from './src/components/LoginForm';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import LibraryList from './src/components/librarylist/LibraryList';

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

class ReduxApp extends  React.Component{
  render(){
    return(
      <Provider store={createStore(reducers)}> 
        <View>
          <Header headerText={'My Albums'}/>
          <LibraryList/>
        </View>
      </Provider>
    );
  }
}

//For UI project
//export default App;
//For Redus
export default ReduxApp;