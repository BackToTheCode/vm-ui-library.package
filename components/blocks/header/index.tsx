/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Children } from 'react';
import Logo, { ILogoProps } from './logo';
import Address, { IAddressProps } from './address';
import Container from '../../elements/container/index';

export interface IHeaderProps {
  variant?: string;
  children?: React.ReactNode;
  isConnected?: boolean;
  ern?: string;
  address?: string;
}

type Header = {
  Logo: React.FC<ILogoProps>;
  Address: React.FC<IAddressProps>;
  Wrapped?: any;
};

const Header: React.FC<IHeaderProps> & Header = props => {
  const { children, isConnected, address } = props;
  return (
    <Container variant="container.wide">
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Logo') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'Address') {
          const newProps = { ...child.props, ...{ isConnected, address } };
          return React.cloneElement(child, newProps);
        }

        return child;
      })}
    </Container>
  );
};

Header.Logo = Logo;
Header.Address = Address;

export default Header;
