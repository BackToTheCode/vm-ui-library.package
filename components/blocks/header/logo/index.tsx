/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Image } from 'rebass';
import styles from './styles';

export interface LogoProps {
  variant?: string;
  image: string;
  children?: React.ReactNode;
}

export const Logo: FC<LogoProps> = ({ image }) => {

  return (
    <Box width={styles.container}>
      <Image src={image} sx={styles.logo} />
    </Box>
  );
};
Logo.displayName = 'Logo';
