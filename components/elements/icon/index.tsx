/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Box, Image } from 'rebass';
import styles from './styles';

export interface IconProps {
  sx?: any;
  icon: string;
}

const Icon: React.FC<IconProps> = ({ sx, icon }: IconProps) => {
  const brandPrimary = sx.bg;
  let mainBgColor = null;
  let glowBgColor = null;
  if (brandPrimary.indexOf('a') == -1) {
    mainBgColor = brandPrimary.replace(')', ', 0.50)').replace('rgb', 'rgba');
    glowBgColor = brandPrimary.replace(')', ', 0.20)').replace('rgb', 'rgba');
  }

  return (
    <Box
      sx={{
        ...sx,
        ...styles.iconContainer(glowBgColor)
        
      }}
    >
      <Image sx={styles.icon(mainBgColor)} src={icon} />
    </Box>
  );
};
Icon.displayName = 'Icon';

export default Icon;
