/** @jsx jsx */
import { Container } from '@backtothecode/vault-maker-ui';
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import render from './render';
import { vaults } from './render/vaults';
import styles from './styles';
// import { Address, AddressProps } from './address';
// import { Logo, LogoProps } from './logo';

export interface DashboardProps {
  children?: React.ReactNode;
  isConnected?: boolean;
  ern?: string;
  address?: string;
}

interface Dashboard {
//   Logo: FC<LogoProps>;
//   Address: FC<AddressProps>;
  Wrapped?: any;
};

export const Dashboard: FC<DashboardProps> & Dashboard = props => {
  const { children, isConnected, address } = props;
  const { tabs, vaults } = render;
  return (
    <Container sx={styles.container} variant="container.default">
        {tabs()}
        {vaults()}
    </Container>
  );
};

