import React from 'react';
import Button, { ButtonProps } from '../../../elements/button/button';

export interface CTAButtonProps extends ButtonProps {
  children: any;
}

const style = {
  width: '100%',
  alignContent: 'end',
  mt: 6
};

const CTAButton: React.FC<CTAButtonProps> = ({ children }) => (
  <Button sx={style} variant="primary">
    {children}
  </Button>
);

export default CTAButton;
