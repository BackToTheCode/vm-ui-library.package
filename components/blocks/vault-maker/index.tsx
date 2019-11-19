import React from 'react';
import Card from '../../elements/card';
import ChooseCollateral from './choose-collateral';
import Container from '../../elements/container';
import ethLogo from '../../../public/images/ethereum-logo.svg';

const cardBaseStyle = {
    padding: '30px',
    alignItems: 'center',
    // background: 'linear-gradient(34deg, #fff 0%, #fff 65%, #e4e4e4 65%, #e4e4e4 100%)'
}   

const containerBaseStyle = {
    alignItems: 'start',
    flexDirection: 'column',
    height: '100%'
}
    

const renderChooseCollateral = () => {

  return (
    <ChooseCollateral>
      <ChooseCollateral.Message>We suggest ETH as collateral for your Vault</ChooseCollateral.Message>
      <ChooseCollateral.Balance icon={ethLogo}/>
      <ChooseCollateral.CTAButton>Sounds good</ChooseCollateral.CTAButton>
      <ChooseCollateral.OAButton>Switch collateral type</ChooseCollateral.OAButton>
    </ChooseCollateral>
  )
}

const VaultMaker = () => (
  <Card sx={cardBaseStyle}>
    <Container sx={containerBaseStyle} variant="container.default">
      {renderChooseCollateral()}
    </Container>
  </Card>
);

export default VaultMaker;
