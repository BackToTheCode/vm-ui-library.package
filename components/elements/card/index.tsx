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
  maxWidth: '350px',
  width: '90%',
  height: '100%',
  maxHeight: '500px',
  borderRadius: '4px',
  boxShadow: '3px 3px 2px #e3e3e3',
  bg: '#ffffff'
};

const Card: React.FC<IContainerProps> = ({ style, children }: any) => (
  <Box sx={{...baseStyle, ...style}}>{children}</Box>
);

export default Card;
