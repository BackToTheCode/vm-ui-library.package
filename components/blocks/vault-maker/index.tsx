import React from 'react';
import Card from '../../elements/card';
import ConfirmCollateralChoice from './1-confirm-collateral-choice/1-confirm-collateral-choice';
import ChangeCollateralType from './1A-change-collateral-type/wrapped';
import Container from '../../elements/container';
import ethLogo from '../../../public/images/ethereum-logo.svg';
import repLogo from '../../../public/images/rep-logo.webp';
import batLogo from '../../../public/images/bat-logo.png';
import { useTheme } from 'emotion-theming';


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

const renderChangeCollateralType = () => {
  const theme: any = useTheme();
  console.log('theme', theme);
  return (
    <ChangeCollateralType.Wrapped>
      <ChangeCollateralType.Option icon={ethLogo} name="option1" brand={theme.colors.ethMain}>ETH</ChangeCollateralType.Option>
      <ChangeCollateralType.Option icon={repLogo} name="option2" brand={theme.colors.repMain}>REP</ChangeCollateralType.Option>
      <ChangeCollateralType.Option icon={batLogo} name="option3" brand={theme.colors.batMain}>BAT</ChangeCollateralType.Option>
      <ChangeCollateralType.CTAButton>Confirm selection</ChangeCollateralType.CTAButton>
    </ChangeCollateralType.Wrapped>
  )
}

const VaultMaker = () => (
  <Card sx={cardBaseStyle}>
    <Container sx={containerBaseStyle} variant="container.default">
      {false && renderConfirmCollateralChoice()}
      {renderChangeCollateralType()}
    </Container>
  </Card>
);

export default VaultMaker;
