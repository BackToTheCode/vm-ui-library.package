/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Box } from 'rebass';
import styles from './styles';

export interface CardProps {
  children?: React.ReactNode;
  sx?: any;
}

export const Card: FC<CardProps> = ({ sx, children }: CardProps) => (
  <Box sx={{ ...styles.base, ...sx }}>{children}</Box>
);
Card.displayName = 'Card';
