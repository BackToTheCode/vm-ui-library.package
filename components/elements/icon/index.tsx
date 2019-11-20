/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Box, Image } from 'rebass';

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
        ...{
          borderRadius: '50%',
          padding: '7px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'inline-flex',
        },
        ...sx,
        ...{bg: glowBgColor}
      }}
    >
      <Image
        sx={{
          width: '45px',
          height: '45px',
          padding: '8px',
          borderRadius: '50%',
          bg: mainBgColor
        }}
        src={icon}
      />
    </Box>
  );
};

export default Icon;
