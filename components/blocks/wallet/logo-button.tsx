import React from 'react';
import { Box, Image } from 'rebass';
import { LargeButton, ButtonProps } from '../../elements/button/button';


const style = {
  button: {
    mx: 'auto',
    mb: 4,
    width: '320px'
  },
  logo: {
    container: {
      width: '20px',
      display: 'inline-block',
      mr: 3
    },
    icon: {
      width: '20px',
      position: 'relative',
      top: '4px'
    }
  }
};

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
    sx={style.button}
    onClick={onClick}
  >
    <Box sx={{ ...style.logo.container, ...sx }}>
      <Image sx={{ ...style.logo.icon, ...sx }} src={icon} />
    </Box>
    {children}
  </LargeButton>
);

LogoButton.displayName = 'LogoButton';

export default LogoButton;
