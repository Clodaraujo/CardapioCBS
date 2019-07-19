import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import{ Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Card, CardItem, Footer } from 'native-base';

const listaCestas = (props) => {

  const lista = ({todasCestas}) => {
      if(todasCestas) {
        return todasCestas.map((item) => {
          return (
            <ListItem key={item.id} style={{padding: 25}} >

              <Card style={{alignItems: 'center',width: 320, height: 400 ,flex: 0, borderRadius: 35, backgroundColor:'#F1F7F2'}}>

                <CardItem cardBody>                
                  <Thumbnail square source={{ uri: `${item.imagem}`}} style={{ height: 200, width: 200 ,backgroundColor:'#F1F7F2', marginTop:0, marginBottom: -25}}/>
                </CardItem>

                  <CardItem style={{backgroundColor:'#F1F7F2'}}>
                    <Body style={{alignItems: 'center'}}>
                      <Text style={{fontSize: 30, color: '#006E90', fontFamily: 'sans-serif-light', paddingBottom: 12}}>{`${item.nome_cesta}`}</Text>
                      <Text note style={{fontSize: 25, color: '#006E90' , fontFamily: 'sans-serif-light',  paddingBottom: 10}}>{`${item.preco}`}</Text>
                    </Body> 
                  </CardItem >
                      
                  <CardItem style={{backgroundColor:'#F1F7F2'}}>
                      <TouchableOpacity style={{width: 214}}>
                          <Text style={{paddingTop:7,textAlign: 'center',fontSize: 23,color:"#fff", fontFamily: 'sans-serif-light', backgroundColor:'#006E90', borderColor: '#006E90', borderWidth: 2, borderRadius: 15, height: 49}}>Vizualizar </Text>
                      </TouchableOpacity>
                  </CardItem>

                </Card>

            </ListItem>
          )
        })
      }
  }
  return(
      <Container>
        <Content padder>
          <List style={{ flex: 1,flexDirection: 'row', flexWrap: 'wrap'}}>  
              {lista(props)}
          </List>
        </Content>
      </Container>
  )     
}


export default listaCestas;

