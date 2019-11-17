/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Logo from './logo';
import Address from './address';
import logoImage from '../../../public/images/mark-maker.svg';
import Container from '../../elements/container/index';

export interface IHeaderProps {
  variant?: string;
  children?: React.ReactNode;
  ern?: string;
  address?: string;
}

const Header: React.FC<IHeaderProps> = (props) => (
  <Container variant="container.wide">
    <Logo image={logoImage} />
    <Address {...props} />
  </Container>
);

export default Header;
