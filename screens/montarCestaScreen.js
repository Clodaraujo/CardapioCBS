//cestaPadrao Screen 
import React, { Component } from 'react';
import{ StyleSheet, View, Text } from 'react-native';

class montarCesta extends Component{
    render(){
        return(
            <View style = {style.container}>
                <Text>montarCesta Screen</Text>
            </View>
        )
    }

}

export default montarCesta;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

});