import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import{ Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Card, CardItem, Footer } from 'native-base';

const listaCestas = (props) => {

  const lista = ({todasCestas}) => {
      if(todasCestas) {
        return todasCestas.map((item) => {
          return (
            <ListItem key={item.id}>
              <Card style={{alignItems: 'center',width: 250 ,flex: 0}}>
                <CardItem cardBody>                
                  
                    <Thumbnail square source={{ uri: `${item.imagem}`}} style={{ height: 200, width: 100 , flex: 1}}/>
                  
                  </CardItem>

                  <CardItem >
                    <Body>
                      <Text>{`${item.nome_cesta}`}</Text>
                      <Text note>{`${item.preco}`}</Text>
                    </Body> 
                  </CardItem>
                </Card>
            </ListItem>
          )
        })
      }
  }
  return(
      <Container>
        <Header transparent />
        <Content padder>
          <List horizontal={true} style={{flex: 1}}>  
              {lista(props)}
          </List>
        </Content>
      </Container>
  )     
}


export default listaCestas;

