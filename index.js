import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={style}>
    <Header HeaderText={'Albums'} />
    <AlbumList />
  </View>
);

const style = {
  backgroundColor: '#D8D8D8'
};

AppRegistry.registerComponent('albums4', () => App);
