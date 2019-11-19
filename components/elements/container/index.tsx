/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Flex } from 'rebass';

export interface IContainerProps {
  variant?: string;
  children?: React.ReactNode;
  sx?: any;
}

const baseStyle = {
  maxHeight: '100%',
  mx: 'auto'
}

const Container: React.FC<IContainerProps> = ({ children, variant, sx }) => (
  <Flex variant={variant} sx={{...baseStyle, ...sx}} >
    {children}
  </Flex>
);

const fullStyle = {
  height: '85vh',
  justifyContent: 'center', 
  alignItems: 'center', 
  flexDirection: 'column'
}

const FullContainer = (props: any) => <Container {...props} sx={fullStyle} />

export {
  FullContainer,
  Container
}

export default Container;
