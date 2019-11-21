import React from 'react';
import { Heading, HeadingProps } from 'rebass';

const style = {
  mb: 5,
  textAlign: 'center'
};

export interface HeaderProps extends HeadingProps {
  children: any;
}

const Header: React.FC<HeaderProps> = ({ children }: any) => (
  <Heading variant="heading.large" sx={style}>
    {children}
  </Heading>
);
Header.displayName = 'Header';

export default Header;
