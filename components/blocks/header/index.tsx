/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Logo from './logo';
import styled from '@emotion/styled';
import logoImage from '../../../public/images/Mark_Maker.svg';
import Container from '../../elements/container/index';

const Spacer = styled.div({
  mx: 'auto'
});

export interface IHeaderProps {
  variant?: string;
  children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = () => (
  <Container variant='container.wide'>
    <Logo image={logoImage} />
    <Spacer />
  </Container>
);

export default Header;
