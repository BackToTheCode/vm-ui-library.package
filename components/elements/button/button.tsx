/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Button as BaseButton } from 'rebass';

export interface IButtonProps {
  variant?: string;
  style?: any;
  children?: React.ReactNode;
  disable?: boolean;
  onClick?: (e: any) => void;
}

const baseStyle = {
  fontWeight: 'body',
  fontSize: 2,
  cursor: 'pointer',
  fontFamily: 'body',
  borderStyle: 'solid',
  borderWidth: 2,
  '&:focus': {
    outline: 0
  }
}

const Button: React.FC<IButtonProps> = ({ onClick, variant, children, style, disable }) => (
  <BaseButton onClick={onClick} disabled={disable} sx={{...baseStyle, ...style}} variant={variant}>
    {children}
  </BaseButton>
);

export default Button;
