/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Box, Image } from 'rebass';

export interface IconProps {
  sx?: any;
  icon: string;
}

const Icon: React.FC<IconProps> = ({sx, icon}: IconProps) => (
  <Box
    sx={{...{
      borderRadius: '50%',
      padding: '7px',
      alignSelf: 'flex-end',
      background: 'lightSecondary',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'inline-flex'
    }, ...sx}}
  >
    <Image
      sx={{
        width: '45px',
        height: '45px',
        padding: '8px',
        borderRadius: '50%',
        bg: 'secondary'
      }}
      src={icon}
    />
  </Box>
);

export default Icon;
