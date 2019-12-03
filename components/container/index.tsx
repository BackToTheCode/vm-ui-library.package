/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Flex } from 'rebass';
import styles from './styles';

export interface ContainerProps {
  variant?: string;
  children?: React.ReactNode;
  displayName?: string;
  sx?: any;
}

interface Container {
  displayName?: string;
}

const Container: FC<ContainerProps> & Container = ({ children, variant, sx }) => {
  return (
    <Flex variant={variant} sx={{ ...styles.base, ...sx }}>
      {children}
    </Flex>
  );
};

const FullContainer: FC<ContainerProps> & Container = (props) => <Container {...props} sx={styles.full} />;

Container.displayName = 'Container';
FullContainer.displayName = 'FullContainer';

export { FullContainer, Container };
