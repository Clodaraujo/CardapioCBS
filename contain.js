import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import{ Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon } from 'native-base';

const listaCestas = (props) => {

  const lista = ({todasCestas}) => {
      if(todasCestas) {
        return todasCestas.map((item) => {
          return (
            <ListItem key={item.id} avatar >
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


            </ListItem>
          )
        })
      }
  }
  return(
      <Container>
        <Header/>
        <Content>
          <List horizontal={true}>
            {lista(props)}
          </List>
        </Content>
      </Container>
  )     
}


export default listaCestas;

