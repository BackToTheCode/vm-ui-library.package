import React from 'react';
import { Text, TextProps } from 'rebass';
import styles from './styles';

export interface SubHeaderProps extends TextProps {
  children: React.ReactNode;
}

export const SubHeader = ({ sx, children }) => (
  <Text variant="body.regular" sx={{ ...styles.subHeader, ...sx }}>
    {children}
  </Text>
);

SubHeader.displayName = 'SubHeader';

