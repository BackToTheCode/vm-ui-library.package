import React from 'react';
import { Box, Text, Image } from 'rebass';
import Button from '../../elements/button/button';
import ethLogo from '../../../public/images/ethereum-logo.svg';

const baseButtonStyle = {
  width: '100%',
  mb: 4
};

const ChooseCollateral = () => (
  <React.Fragment>
    <Box sx={{ flex: 1, padding: 6 }}>
      <Image sx={{ width: '160px', height: '160px', padding: '15px', borderRadius: '50%', bg: 'rgba(244, 183, 49, 0.2)' }} src={ethLogo} />
    </Box>  
    <Text sx={{ mb: 3 }} variant="heading.large">
      ETH
    </Text>
    <Text sx={{ mb: 6, fontWeight: 'bold', color: 'grey'  }} variant="body.small">
      1 ETH = 80 USD
    </Text>
    <Text
      sx={{ mb: 7, textAlign: 'center' }}
      variant="body.regular"
    >
      You must choose what to use as collateral for your Vault.
    </Text>
    <Button style={baseButtonStyle} variant="primary">
      Continue
    </Button>
    <Button style={{...baseButtonStyle, ...{borderColor: 'white'}}} variant="outline">
      Switch collateral type
    </Button>
  </React.Fragment>
);

export default ChooseCollateral;
