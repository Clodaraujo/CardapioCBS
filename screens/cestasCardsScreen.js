import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import{ Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Card, CardItem } from 'native-base';

const listaCestas = (props) => {

  const lista = ({todasCestas}) => {
      if(todasCestas) {
        return todasCestas.map((item) => {
          return (
            <CardItem key={item.id} avatar >
              <Left>
                <Thumbnail source={{ uri: `${item.imagem}`}}/>
              </Left>
              <Body>
                <Text>{`${item.nome_cesta}`}</Text>
                <Text note>{`${item.preco}`}</Text>
              </Body>
              <Right style={{justifyContent:'center'}}>
                <Icon name='heart' style={{paddingRight: 5 ,fontSize: 30}}/> 

              </Right>


            </CardItem>
          )
        })
      }
  }
  return(
      <Container>
        <Header/>
        <Content>
          <Card  style={{flex: 0}} horizontal={true}>
            {lista(props)}
          </Card>
        </Content>
      </Container>
  )     
}


export default listaCestas;
