/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Image } from 'rebass';

export interface LogoProps {
  variant?: string;
  image: string;
  children?: React.ReactNode;
}

const styles = {
  width: '100%'
};

const Logo: FC<LogoProps> = ({ image }) => (
  <Box width={'100px'}>
    <Image src={image} sx={styles} />
  </Box>
);

export default Logo;
