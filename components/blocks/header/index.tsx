/** @jsx jsx */
import { Container } from '@backtothecode/vault-maker-ui/dist/es2015/index.js';
import { jsx } from '@emotion/core';
import React, { Children, FC } from 'react';
import { Address, AddressProps } from './address';
import { Logo, LogoProps } from './logo';

export interface HeaderProps {
  children?: React.ReactNode;
  isConnected?: boolean;
  ern?: string;
  address?: string;
}

interface Header {
  Logo: FC<LogoProps>;
  Address: FC<AddressProps>;
  Wrapped?: any;
};

export const Header: FC<HeaderProps> & Header = props => {
  const { children, isConnected, address } = props;
  return (
    <Container variant="container.wide">
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Logo') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'Address') {
          const newProps = { ...{ isConnected, address }, ...child.props };
          return React.cloneElement(child, newProps);
        }

        return child;
      })}
    </Container>
  );
};

Header.defaultProps = {
  isConnected: false
};

Header.Logo = Logo;
Header.Address = Address;
