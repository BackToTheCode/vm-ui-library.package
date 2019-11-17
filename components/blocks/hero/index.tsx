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

const Hero: React.FC<IHeroProps> = () => (
  <Container
    style={{ justifyContent: 'center', alignItems: 'center' }}
    variant="container.regularTall"
  >
    <Box>
      <Text variant="heading.large" sx={{mb: 5, textAlign: 'center'}}>Start Making a Vault</Text>
      <Text variant="body.regular" sx={{mb: 7, color: 'grey', mx: 'auto', display: 'block', textAlign: 'center'}}>Connect to the Ethereum network</Text>
      <Button variant="outline" style={{display: 'block', margin: 'auto'}}>
        <Box sx={{ width: '20px', display: 'inline-block', mr: 3 }}>
          <Image sx={{ position: 'relative', top: 2 }} src={metamaskLogo} />
        </Box>
        Connect with Metamask
      </Button>
    </Box>
  </Container>
);

export default Hero;
