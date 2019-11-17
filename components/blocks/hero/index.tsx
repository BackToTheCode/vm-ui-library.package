/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Button from '../../elements/button/button';
import Container from '../../elements/container/index';
import metamaskLogo from '../../../public/images/metamask-fox.svg';
import { Image, Box, Text } from 'rebass';

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
  width: '320px',
};

const Hero: React.FC<IHeroProps> = () => (
  <Container
    style={{ justifyContent: 'center', alignItems: 'center' }}
    variant="container.regularTall"
  >
    <Box>
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
      <Button variant="outline" style={buttonStyles}>
        <Box sx={logoStyles.logoHolder}>
          <Image sx={logoStyles.logo} src={metamaskLogo} />
        </Box>
        Connect with Metamask
      </Button>
      <Button disable={true} variant={true ? "outline.disabled" : "outline"} style={buttonStyles}>
        <Box sx={logoStyles.logoHolder}>
          <Image sx={logoStyles.logo} src={metamaskLogo} />
        </Box>
        Trezor - coming soon...
      </Button>
      <Button disable={true} variant={true ? "outline.disabled" : "outline"} style={buttonStyles}>
        <Box sx={logoStyles.logoHolder}>
          <Image sx={logoStyles.logo} src={metamaskLogo} />
        </Box>
        Ledger Blue - coming soon...
      </Button>
    </Box>
  </Container>
);

export default Hero;
