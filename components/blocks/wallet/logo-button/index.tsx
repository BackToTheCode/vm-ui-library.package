import React from 'react';
import { Box, Image } from 'rebass';
import { LargeButton, ButtonProps } from '../../../elements/button/button';
import styles from './styles';

export interface LogoButtonProps extends ButtonProps {}

const LogoButton: React.FC<ButtonProps> = ({
  sx,
  icon,
  isDisabled,
  onClick,
  children
}) => (
  <LargeButton
    variant="outline"
    isDisabled={isDisabled}
    sx={styles.button}
    onClick={onClick}
  >
    <Box sx={{ ...styles.logo.container, ...sx }}>
      <Image sx={{ ...styles.logo.icon, ...sx }} src={icon} />
    </Box>
    {children}
  </LargeButton>
);

LogoButton.displayName = 'LogoButton';

export default LogoButton;
