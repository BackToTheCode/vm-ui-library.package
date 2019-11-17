/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import Button from '../../elements/button/button';
import Container from '../../elements/container/index';
import metamaskLogo from '../../../public/images/metamask-fox.svg';
import ledgerLogo from '../../../public/images/ledger-logo.png';
import trezorLogo from '../../../public/images/trezor-logo.png';
import { Image, Box, Text } from 'rebass';
import { connect } from '../../../utils/web3';

export interface IHeroProps {
  variant?: string;
  children?: React.ReactNode;
}

const logoStyles = {
  logoHolder: {
    width: '20px',
    display: 'inline-block',
    mr: 3
  },
  logo: {
    width: '20px',
    position: 'relative',
    top: '4px'
  }
};

const buttonStyles = {
  display: 'block',
  margin: 'auto',
  mb: 3,
  width: '320px'
};

const Hero: React.FC<IHeroProps> = () => {
  const [isLoading, setLoading] = useState(false);

  const handleMetamask = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await connect();
    console.log('click being handled')
    // getWeb3();
    setLoading(false);
  };

  return (  
    <Container
      style={{ justifyContent: 'center', alignItems: 'center' }}
      variant="container.regularTall"
    >
      {isLoading ? <p>Loading...</p> : <Box>
        <Text variant="heading.large" sx={{ mb: 5, textAlign: 'center' }}>
          Start Making a Vault
        </Text>
        <Text
          variant="body.regular"
          sx={{
            mb: 7,
            color: 'grey',
            mx: 'auto',
            display: 'block',
            textAlign: 'center'
          }}
        >
          Connect to the Ethereum network
        </Text>
        <Button variant="outline" style={buttonStyles} onClick={handleMetamask}>
          <Box sx={logoStyles.logoHolder}>
            <Image sx={logoStyles.logo} src={metamaskLogo} />
          </Box>
          Connect with Metamask
        </Button>
        <Button
          disable={true}
          variant={true ? 'outline.disabled' : 'outline'}
          style={buttonStyles}
        >
          <Box
            sx={{
              ...logoStyles.logoHolder,
              ...{ padding: '1px', top: '-1px', position: 'relative' }
            }}
          >
            <Image sx={logoStyles.logo} src={ledgerLogo} />
          </Box>
          Trezor - coming soon...
        </Button>
        <Button
          disable={true}
          variant={true ? 'outline.disabled' : 'outline'}
          style={buttonStyles}
        >
          <Box sx={logoStyles.logoHolder}>
            <Image sx={logoStyles.logo} src={trezorLogo} />
          </Box>
          Ledger Blue - coming soon...
        </Button>
      </Box>}
    </Container>
  );
};

export default Hero;
