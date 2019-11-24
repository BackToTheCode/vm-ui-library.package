/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC, Children } from 'react';
import Logo, { LogoProps } from './logo';
import Address, { AddressProps } from './address';
import Container from '../../elements/container/index';

export interface HeaderProps {
  children?: React.ReactNode;
  isConnected?: boolean;
  ern?: string;
  address?: string;
}

type Header = {
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
}

Header.Logo = Logo;
Header.Address = Address;

