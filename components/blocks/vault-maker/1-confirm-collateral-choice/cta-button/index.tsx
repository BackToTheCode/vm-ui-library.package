import React from 'react';
import Button, { ButtonProps } from '../../../../elements/button/button';
import styles from './styles';

export interface CTAButtonProps extends ButtonProps {
  children: any;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children }) => (
  <Button sx={styles.ctaButtonStyle} variant="primary">
    {children}
  </Button>
);

CTAButton.displayName = 'CTAButton';

export default CTAButton;
