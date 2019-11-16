/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box } from 'rebass';
import React from 'react';
import { Image } from 'rebass';

export interface ILogoProps {
  variant?: string;
  image: string;
  children?: React.ReactNode;
}

const styles = {
  width: '100%'
};

const Logo: React.FC<ILogoProps> = ({ image }) => (
  <Box width={'100px'}>
    <Image src={image} sx={styles} />
  </Box>
);

export default Logo;
