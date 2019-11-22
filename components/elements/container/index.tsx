/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Flex } from 'rebass';
import styles from './styles';

export interface IContainerProps {
  variant?: string;
  children?: React.ReactNode;
  sx?: any;
}

const Container: React.FC<IContainerProps> = ({ children, variant, sx }) => {
  console.log('variant', variant);
  return (
    <Flex variant={variant} sx={{ ...styles.base, ...sx }}>
      {children}
    </Flex>
  );
};

const FullContainer = (props: any) => <Container {...props} sx={styles.full} />;

Container.displayName = 'Container';
FullContainer.displayName = 'FullContainer';

export { FullContainer, Container };

export default Container;
