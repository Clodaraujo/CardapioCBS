 //cestaPadrao Screen 
 import React, { Component } from 'react';
 import{ StyleSheet, View, Text, Image, ScrollView, Dimensions } from 'react-native';
 
 import CestasCardsScreen from '../screens/cestasCardsScreen'

 const { height } = Dimensions.get('window');
 
 const URL_CESTAS = 'http://192.168.0.105:3000/cestas'
 
 export default class cestaPadrao extends Component{
  // Enabling ScrollView to the end of the page
  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  // Inserting the JSON file into the mock server
     constructor(props) {
         super(props);
     
         this.state = {
           cestas: ''
         }
       }
     
       componentDidMount() {
         fetch(URL_CESTAS, {
           method: 'GET'
         })
         .then(response => response.json())
         .then(json => {
           this.setState({cestas:json})
         })
       }
 
       
 
     render(){

      const scrollEnabled = this.state.screenHeight > height;
      
         return(
          <View style = { style.container }>
            
            {/* Logo + Retangulo ------- */}
              <View style = {style.header}>
                  <View style = {style.logocontainer}>
                      <Image style = {{width: 210, height: 210}} source = {require('../assets/CBSLogo.png')} resizeMode = 'contain'/>
                  </View>
              </View>

              <ScrollView style={{flex: 1}} onContentSizeChange ={this.onContentSizeChange} scrollEnabled={scrollEnabled}>
                <CestasCardsScreen todasCestas={this.state.cestas}/>
            </ScrollView>
            
          </View>
           
         )
     }
  }
 
 
 
 
 

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'#fff',
        
      },
    
    header:{
        height: 1,
        backgroundColor: '#EBF5DF',
        width: 1280,
        
  
    },
    logocontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBF5DF',
    },
    
  
  });