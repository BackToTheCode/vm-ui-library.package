import React from 'react';
import { Box, Text } from 'rebass';
import { CoinIcon } from '../../../../elements/coin-icon';
import { useTheme } from 'emotion-theming';
import toCurrency from '../../../../../utils/currency-formatter';
import styles from './styles';

export interface BalanceProps {
  icon: any;
  balance: number;
  price: number;
  symbol: string;
  usdValue: number;
}

const Balance: React.FC<BalanceProps> = ({
  icon,
  balance,
  price,
  symbol,
  usdValue,
}: any) => {
  const theme: any = useTheme();
  
  return (
    <Box sx={styles.boxStyle}>
      <Text sx={styles.labelStyle} variant="body.small">
        BALANCE
      </Text>
      <Box>
        <Text
          variant="heading.regular"
          sx={styles.balanceStyle}
        >{`${toCurrency(balance)} ${symbol}`}</Text>
        <CoinIcon sx={styles.coinIconStyle(theme.colors.ethMain)} icon={icon} />
      </Box>
      <Text sx={styles.balanceDetailStyle} variant="body.small">
        {`$${toCurrency(usdValue)} @ ${toCurrency(price)} USD PER ${symbol}`}
      </Text>
    </Box>
  );
};

Balance.displayName = 'Balance';

export default Balance;
