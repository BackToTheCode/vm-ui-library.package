import React from 'react';
import { Box, Text } from 'rebass';
import CoinIcon from '../../../../elements/icon';
import { useTheme } from 'emotion-theming';
import toCurrency from '../../../../../utils/currency-formatter';
import styles from './styles';

export interface BalanceProps {
  icon: any;
  balance: number;
  price: number;
  collateral: string;
}

const Balance: React.FC<BalanceProps> = ({
  icon,
  balance,
  price,
  collateral
}: any) => {
  const balanceVal = toCurrency(price * balance);

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
        >{`${balance} ${collateral}`}</Text>
        <CoinIcon sx={styles.coinIconStyle(theme.colors.ethMain)} icon={icon} />
      </Box>
      <Text sx={styles.balanceDetailStyle} variant="body.small">
        {`$${balanceVal} @ ${price} USD PER ${collateral}`}
      </Text>
    </Box>
  );
};

Balance.displayName = 'Balance';

export default Balance;
