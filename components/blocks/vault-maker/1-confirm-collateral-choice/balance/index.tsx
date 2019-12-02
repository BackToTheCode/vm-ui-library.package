import { CoinIcon } from '@backtothecode/vault-maker-ui';
import { useTheme } from 'emotion-theming';
import React, { FC } from 'react';
import { Box, Text } from 'rebass';
import toCurrency from '../../../../../utils/currency-formatter';
import styles from './styles';

export interface BalanceProps {
  icon: any;
  balance: number;
  price: number;
  symbol: string;
  usdValue: number;
}

export const Balance: FC<BalanceProps> = ({
  icon,
  balance,
  price,
  symbol,
  usdValue
}) => {
  const theme: any = useTheme();
  const coinColor = theme.colors[symbol.toLowerCase()];
  return (
    <Box sx={styles.box}>
      <Text sx={styles.label} variant="body.regular">
        BALANCE
      </Text>
      <Box>
        <Text variant="heading.extra" sx={styles.balance}>{`${toCurrency(
          balance
        )}`}</Text>
        <Text variant="heading.regular" sx={styles.symbol}>{`${symbol}`}</Text>
        <CoinIcon sx={styles.coinIcon(coinColor)} icon={icon} />
      </Box>
      <Text sx={styles.balanceDetail} variant="body.small">
        <Text as="span" sx={styles.balanceValue}>{`$${toCurrency(
          usdValue
        )}`}</Text>
        {` @ ${toCurrency(price)} USD / ${symbol}`}
      </Text>
    </Box>
  );
};

Balance.displayName = 'Balance';
