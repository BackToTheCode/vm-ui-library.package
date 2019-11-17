/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Children } from 'react';
import Logo, { ILogoProps } from './logo';
import Address, { IAddressProps } from './address';
import Container from '../../elements/container/index';
import connect from '../../../store/connect';

export interface IHeaderProps {
  variant?: string;
  children?: React.ReactNode;
  connected?: boolean;
  ern?: string;
  address?: string;
}

type THeader = {
  Logo: React.FC<ILogoProps>;
  Address: React.FC<IAddressProps>;
  Wrapped: any;
};

const Header: React.FC<IHeaderProps> & THeader = props => {
  const { children, connected } = props;
  return (
    <Container variant="container.wide">
      {Children.map(children, (child: any) => {
        if (child.type.name === 'Logo') {
          return React.cloneElement(child, props);
        }

        if (child.type.name === 'Address') {
          return React.cloneElement(child, { connected });
        }

        return child;
      })}
    </Container>
  );
};

function mapStateToProps(state: any) {
  return {
    books: state.Books
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    dispatchAddBook: (payload: any) => dispatch({ type: 'ADD_BOOK', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Header);

Header.Wrapped = Wrapped;
Header.Logo = Logo;
Header.Address = Address;

export default Header
