import React from 'react';
import Card from '../../elements/card';
import ChooseCollateral from './choose-collateral';
import Container from '../../elements/container';

const cardBaseStyle = {
    padding: '20px',
    alignItems: 'center'
}   

const containerBaseStyle = {
    alignItems: 'center',
    flexDirection: 'column'
}

const VaultMaker = () => (
  <Card style={cardBaseStyle}>
    <Container style={containerBaseStyle} variant="container.regular">
      <ChooseCollateral />
    </Container>
  </Card>
);

export default VaultMaker;
