/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Image } from 'rebass';
import styles from './styles';


export interface CoinIconProps {
  sx?: any;
  icon: string;
  brand?: string
}

export const CoinIcon: FC<CoinIconProps> = ({brand, sx, icon }) => {;
  let mainBgColor = 'rgb(26, 171, 155)';
  let glowBgColor = 'rgb(89, 188, 175)';
  if (brand && brand.indexOf('a') == -1) {
    mainBgColor = brand.replace(')', ', 0.50)').replace('rgb', 'rgba');
    glowBgColor = brand.replace(')', ', 0.20)').replace('rgb', 'rgba');
  }
  console.log('icon', icon);
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
CoinIcon.displayName = 'CoinIcon';

CoinIcon.defaultProps = {
  brand: 'rgb(244,183,49)'
}

