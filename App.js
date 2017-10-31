/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,Text
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import {Header} from './src/components/common';
import LibraryList from './src/components/LibraryList';


const App = () => {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex:1}}>
        <Header headerText="Zambarali" />
        <LibraryList />
        </View>
      </Provider>
    );
}
export default App;
