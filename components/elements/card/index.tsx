/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Box } from 'rebass';

export interface IContainerProps {
  variant?: string;
  children?: React.ReactNode;
  sx?: any;
}

const baseStyle = {
  maxWidth: '350px',
  width: '90%',
  height: '100%',
  maxHeight: '500px',
  borderRadius: '8px',
  boxShadow: '3px 3px 2px lightGrey',
  bg: 'white'
};

const Card: React.FC<IContainerProps> = ({ sx, children }: any) => (
  <Box sx={{...baseStyle, ...sx}}>{children}</Box>
);
Card.displayName = 'Card';

export default Card;
