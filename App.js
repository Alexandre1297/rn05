import React from 'react';
import styled from 'styled-components';
import Header from './src/components/Header';
import { Image } from 'react-native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export default () => {
  return (
    <Page>
      
      <Header></Header>
      <Image
        source = {require('./src/images/logo.jpg')}
        style = {{width:200, height: 200, backgroundColor: '#F00'}} //Imagem Interna
        resizeMode = "cover"
      />

    <Image 
      source =  {{uri:'https://www.google.com.br/google.jpg'}} //Imagem Externa
      style = {{width:200, height: 200, backgroundColor: '#F00'}}
      resizeMode = "stretch"
    />
    </Page>
  
  );
}