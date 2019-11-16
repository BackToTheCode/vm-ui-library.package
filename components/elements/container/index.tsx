/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Flex } from 'rebass';

export interface IContainerProps {
  variant?: string;
  children?: React.ReactNode;
}

const styles = {
  mx: 'auto'
};

const Container: React.FC<IContainerProps> = ({ children, variant }) => (
  <Flex sx={styles} variant={variant}>
    {children}
  </Flex>
);

export default Container;
