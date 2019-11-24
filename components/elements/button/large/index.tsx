/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Button, ButtonProps } from '../regular';
import styles from './styles';

export interface LargeButtonProps extends ButtonProps {}

export const LargeButton: FC<LargeButtonProps> = props => (
  <Button {...props} sx={{ ...props.sx, ...styles.button }}></Button>
);

LargeButton.displayName = 'LargeButton';
