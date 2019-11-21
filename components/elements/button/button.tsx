/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Button as BaseButton } from 'rebass';

export interface ButtonProps {
  onClick?: (e: any) => void;
  variant?: string;
  isDisabled?: boolean;
  children?: React.ReactNode;
  sx?: any;
  icon?: string;
}

const baseStyle = {
  display: 'block',
  fontWeight: 'body',
  fontFamily: 'body',
  borderStyle: 'solid',
  borderWidth: 2,
  fontSize: 2,
  cursor: 'pointer',
  py: 4,
  px: 6,
  transition: '0.2s all',
  '&:hover': {
    transform: 'translateY(-1px)'
  },
  '&:focus': {
    outline: 0
  }
}

const disabledStyle = {
  cursor: 'default',
  opacity: '0.6',
  filter: 'grayscale(1)'
};

const Button: React.FC<ButtonProps> = ({ onClick, variant, isDisabled, sx, children }) => {
  let mergedStyle = baseStyle;
  if (isDisabled) {
    mergedStyle = {...mergedStyle, ...disabledStyle};
  }
    
  return (
  <BaseButton onClick={onClick} sx={{...mergedStyle, ...sx}} variant={variant}>
    {children}
  </BaseButton>
)};

const largeStyle = {
  py: 5
};

const LargeButton = (props: any) => <Button {...props} sx={{...props.sx, ...largeStyle}} ></Button>

Button.displayName = 'Button';
LargeButton.displayName = 'LargeButton';

export {
  Button,
  LargeButton
}

export default Button;
