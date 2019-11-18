/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Box } from 'rebass';

export interface IContainerProps {
  variant?: string;
  children?: React.ReactNode;
  style?: any;
}

const baseStyle = {
  maxWidth: '400px',
  width: '100%',
  height: '100%',
  maxHeight: '500px',
  borderRadius: '4px',
  boxShadow: '3px 3px 2px #e3e3e3',
  bg: '#ffffff'
};

const Card: React.FC<IContainerProps> = ({ children }: any) => (
  <Box sx={baseStyle}>{children}</Box>
);

export default Card;
