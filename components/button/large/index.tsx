/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { SxStyleProp } from 'rebass';
import { Button, ButtonProps } from '../regular';
import styles from './styles';

export interface LargeButtonProps {
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /** Button variants */
  variant: 'primary' | 'secondary' | 'outline' | 'text';

  isDisabled?: boolean;
  children?: React.ReactNode;

  /** System-UI style prop */
  sx?: SxStyleProp;
}

export const LargeButton: FC<LargeButtonProps> = (props) => (
  <Button {...props} sx={{ ...props.sx, ...styles.button }}></Button>
);

LargeButton.displayName = 'LargeButton';
