/** @jsx jsx */
import { jsx } from '@emotion/core';
import { default as NextLink } from 'next/link';
import React, {FC } from 'react';
import { Link as BaseLink } from 'rebass';

export interface LinkProps {
  variant?: string;
  style?: any;
  children?: React.ReactNode;
  href?: string;
  sx?: any;
  text: string;
}

export const Link: FC<LinkProps> = ({ sx, variant, href, text }) => (
  <BaseLink sx={sx} variant={variant}>
    <NextLink href={href}>{text}</NextLink>
  </BaseLink>
);

Link.displayName = 'Link';
