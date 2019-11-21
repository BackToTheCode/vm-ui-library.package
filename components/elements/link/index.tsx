/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import NextLink from 'next/link';
import { Link as BaseLink } from 'rebass';

export interface ILinkProps {
  variant?: string;
  style?: any;
  children?: React.ReactNode;
  href?: string;
  sx?: any;
  text: string;
}

// const defaultStyles = {
//   fontWeight: 'body',
//   fontSize: 2,
//   cursor: 'pointer',
//   fontFamily: 'body',
//   borderStyle: 'solid',
//   borderWidth: 2,
//   px: 6,
//   '&:focus': {
//     outline: 0
//   }
// }

const Button: React.FC<ILinkProps> = ({ sx, variant, href, text }) => (
  <BaseLink sx={sx} variant={variant}>
    <NextLink href={href}>{text}</NextLink>
  </BaseLink>
);


export default Button;
