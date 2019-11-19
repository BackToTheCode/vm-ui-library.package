import React from 'react';
import Card from '../../elements/card';
import ConfirmCollateralChoice from './1-confirm-collateral-choice';
import ChangeCollateralChoice from './1A-change-collateral-choice';
import Container from '../../elements/container';
import ethLogo from '../../../public/images/ethereum-logo.svg';
import repLogo from '../../../public/images/rep-logo.webp';
import batLogo from '../../../public/images/bat-logo.png';

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
    

const renderConfirmCollateralChoice = () => {

  return (
    <ConfirmCollateralChoice>
      <ConfirmCollateralChoice.Message>We suggest ETH as collateral for your Vault</ConfirmCollateralChoice.Message>
      <ConfirmCollateralChoice.Balance icon={ethLogo}/>
      <ConfirmCollateralChoice.CTAButton>Sounds good</ConfirmCollateralChoice.CTAButton>
      <ConfirmCollateralChoice.OAButton>Switch collateral type</ConfirmCollateralChoice.OAButton>
    </ConfirmCollateralChoice>
  )
}

const renderChangeCollateralChoice = () => {
  return (
    <ChangeCollateralChoice>
      <ChangeCollateralChoice.Option icon={ethLogo}>ETH</ChangeCollateralChoice.Option>
      <ChangeCollateralChoice.Option icon={repLogo}>REP</ChangeCollateralChoice.Option>
      <ChangeCollateralChoice.Option icon={batLogo}>BAT</ChangeCollateralChoice.Option>
      <ChangeCollateralChoice.CTAButton>Confirm selection</ChangeCollateralChoice.CTAButton>
    </ChangeCollateralChoice>
  )
}

const VaultMaker = () => (
  <Card sx={cardBaseStyle}>
    <Container sx={containerBaseStyle} variant="container.default">
      {false && renderConfirmCollateralChoice()}
      {renderChangeCollateralChoice()}
    </Container>
  </Card>
);

export default VaultMaker;
