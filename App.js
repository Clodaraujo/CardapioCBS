import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import welcomeScreen from './screens/welcomeScreen'
import cestaPadraoScreen from './screens/cestaPadraoScreen'
import montarCestaScreen from './screens/montarCestaScreen'

class App extends Component  {
  render(){
    return(

      <AppStackNavigator/>

    );
  }
}

const AppStackNavigator = createStackNavigator({

  Welcome: welcomeScreen, 
  cestaPadrao: cestaPadraoScreen,
  montarCesta: montarCestaScreen


})

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

