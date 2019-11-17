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

const buttonStyles = {
  fontWeight: 'body',
  fontSize: 2,
};

const Button: React.FC<IButtonProps> = ({ variant, children, style, disable }) => (
  <BaseButton disabled={disable} sx={{...buttonStyles, ...style}} variant={variant}>
    {children}
  </BaseButton>
);

export default Button;