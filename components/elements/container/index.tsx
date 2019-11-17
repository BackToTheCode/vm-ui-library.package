/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Flex } from 'rebass';

export interface IContainerProps {
  variant?: string;
  children?: React.ReactNode;
  style?: any;
}

const Container: React.FC<IContainerProps> = ({ children, variant, style }) => (
  <Flex sx={{mx: 'auto', ...style}} variant={variant}>
    {children}
  </Flex>
);

export default Container;
