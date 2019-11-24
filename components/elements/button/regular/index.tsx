/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Button as BaseButton } from 'rebass';
import styles from './styles';

export interface ButtonProps {
  /**
   * Simple click handler
   */
  onClick?: (e: any) => void;
  variant: string;
  isDisabled?: boolean;
  children?: React.ReactNode;
  sx?: any;
  icon?: string;
  /** Buttons background color */
  color?: 'blue' | 'green';
}


export const Button: FC<ButtonProps> = ({
  onClick,
  variant,
  isDisabled,
  sx,
  children
}) => {
  let mergedStyle = styles.button;
  if (isDisabled) {
    mergedStyle = { ...mergedStyle, ...styles.disabled };
  }

  return (
    <BaseButton
      onClick={onClick}
      sx={{ ...mergedStyle, ...sx }}
      variant={variant}
    >
      {children}
    </BaseButton>
  );
};

Button.defaultProps = {
  variant: 'primary'
};

Button.displayName = 'Button';