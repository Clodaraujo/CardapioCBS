//Welcome Screen 
import React, { Component } from 'react';
import{ StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';

class Welcome extends Component{

    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <View style = {style.container}>

                {/* Logo + Retangulo ------- */}
                <View style = {style.header}>
                    <View style = {style.logocontainer}>
                         <Image style = {{width: 210, height: 210}} source = {require('../assets/CBSLogo.png')} resizeMode = 'contain'/>
                    </View>
                </View>

                {/* Titulo texto------ */}
                <View style = {style.title}>
                    <Text style = {style.texto}>Bem vindo ao cardapio CBS Cestas Basicas Sorocaba !</Text>
                    <Text style = {style.texto}> Voce deseja visualizar :</Text>
                </View>

                {/* Botoes----- */}
                <View style = {style.botoes}>

                    <View style = {style.bttpadrao}>
                        <TouchableOpacity style = {style.cestaPadrao} onPress ={() => this.props.navigation.navigate('cestaPadrao')}>

                            <Image style = {style.icons} source = {require('../assets/box.png')} />
                            <Text style = {style.textobtt}>CESTAS {'\n'}PADRÃO</Text>

                        </TouchableOpacity>
                        
                    </View>

                    <View style = {style.bttmontar}>
                        <TouchableOpacity style = {style.montarcesta} onPress ={() => this.props.navigation.navigate('montarCesta')}>

                            <Image style = {style.icons} source = {require('../assets/heart-box.png')} />
                            <Text style = {style.textobtt}>MONTAR SUA CESTA </Text>

                        </TouchableOpacity>
                  
                    </View>
                </View>
            </View>
        )
    }

}

export default Welcome;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:'#fff',
        marginTop: 24,
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

    title: {
        alignItems: 'center',
        marginTop: -20,
    },
    texto: {
        fontSize: 35,
        color: '#006E90',
        fontFamily: 'sans-serif-light',
        marginTop: 12,
        fontWeight: '400',
    },

    botoes: {
        flexDirection: 'row',
        marginBottom: 180,
        
    },

    cestaPadrao: {
        height: 226,
        width: 275,
        backgroundColor: '#006E90',
        borderRadius: 25,
        marginRight: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },

    montarcesta: {
        height: 226,
        width: 275,
        backgroundColor: '#FFAE03',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textobtt:{
        fontFamily:'sans-serif-light',
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
        
    },

    icons: {
        width: 100,
        height:100,
        marginTop: 15,

    },

 



});