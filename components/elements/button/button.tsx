/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Button as BaseButton } from 'rebass';

export interface IButtonProps {
  variant?: string;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
}

const styles = {
  fontWeight: 'body',
  fontSize: 2,
  paddingTop: 1,
  paddingBottom: 1,
  padding: 3
};
  
const Button: React.FC<IButtonProps> = ({ variant, children }) => (
  <BaseButton sx={styles} variant={variant}>{children}
  </BaseButton>
);

export default Button;
