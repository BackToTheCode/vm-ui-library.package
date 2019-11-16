/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Box } from 'rebass';

export interface IContainerProps {
  variant?: string;
  children?: React.ReactNode;
}

const styles = {
  mx: 'auto'
};

const Container: React.FC<IContainerProps> = ({ children, variant }) => (
  <Box sx={styles} variant={variant}>
    {children}
  </Box>
);

export default Container;
