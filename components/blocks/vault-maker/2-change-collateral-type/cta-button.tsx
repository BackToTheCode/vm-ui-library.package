/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Button, { ButtonProps } from '../../../elements/button/button';


export interface CTAButtonProps extends ButtonProps {}

const style = {
  button: {
    width: '100%',
    mt: 5
  }
};

const CTAButton: React.FC<ButtonProps> = ({ children }) => (
  <Button
    sx={{ ...style.button, ...{ alignContent: 'end' } }}
    variant="primary"
  >
    {children}
  </Button>
);

export default CTAButton;
