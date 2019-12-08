/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Image } from 'rebass';
import ethLogo from '../../public/images/ethereum-logo.svg';
import styles from './styles';

/**
 * CoinIconProps {@link CoinIconProps}
 * @see CoinIcon
 */
export interface CoinIconProps {
  /**
   * System-ui style object to override
   */
  sx?: any;
  /**
   * Icon image url
   */
  icon?: string;
  /**
   * Brand colour in rgb format
   */
  brand?: string;
}

/**
 * CoinIcon
 *
 * @component
 * @example
 * return (
 *   <CoinIcon />
 * )
 *
 * @see CoinIconProps
 * @extends {FC<Props>}
 */
export const CoinIcon: FC<CoinIconProps> = ({ brand, sx, icon }) => {
  const { container } = styles;  
  const mainBgColor = brand ? brand.replace(')', ', 0.50)').replace('rgb', 'rgba') : null;
  const glowBgColor = brand ? brand.replace(')', ', 0.20)').replace('rgb', 'rgba') : null;

  return (
    <Box data-testid="coin-icon" sx={{...container(glowBgColor),...sx}}>
      <Image sx={styles.icon(mainBgColor)} src={icon} />
    </Box>
  );
};

CoinIcon.displayName = 'CoinIcon';

CoinIcon.defaultProps = {
  brand: 'rgb(244,183,49)',
  icon: ethLogo
};
