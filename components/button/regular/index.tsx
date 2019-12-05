/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Button as BaseButton, SxStyleProp } from 'rebass';
import styles from './styles';

export interface ButtonProps {
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /** Button variants */
  variant?: "primary" | "secondary" | "outline" | "text";

  isDisabled?: boolean;
  children?: React.ReactNode;

  /** System-UI style prop */
  sx?: SxStyleProp;
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