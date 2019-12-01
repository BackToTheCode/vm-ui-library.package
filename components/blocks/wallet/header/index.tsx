import React, { FC } from 'react';
import { Heading, HeadingProps } from 'rebass';
import styles from './styles';

export interface HeaderProps extends HeadingProps {
  children: any;
}

export const Header: FC<HeaderProps> = ({ children }) => (
  <Heading variant="heading.large" sx={styles.heading}>
    {children}
  </Heading>
);
Header.displayName = 'Header';
