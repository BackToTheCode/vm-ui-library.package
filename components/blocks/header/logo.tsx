/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Image } from 'rebass';

export interface ILogoProps {
  variant?: string;
  image: string;
  children?: React.ReactNode;
}

const styles = {
  width: '100%',
  borderRadius: 8
};

const LogoContainer = styled.div({
  width: '100px'
});

const Logo: React.FC<ILogoProps> = ({ image }) => (
  <LogoContainer>
    <Image src={image} sx={styles} />
  </LogoContainer>
);

export default Logo;
