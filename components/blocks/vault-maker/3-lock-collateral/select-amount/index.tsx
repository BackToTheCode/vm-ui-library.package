/** @jsx jsx */
import { CoinIcon } from '@backtothecode/vault-maker-ui';
import { jsx } from '@emotion/core';
import { Input } from '@rebass/forms';
import { useTheme } from 'emotion-theming';
import { FC, useEffect, useState } from 'react';
import { Box, Text } from 'rebass';
// import batLogo from '../../../../../public/images/bat-logo.png';
// import ethLogo from '../../../../../public/images/ethereum-logo.svg';
import toCurrency from '../../../../../utils/currency-formatter';
import styles from './styles';

export interface SelectAmountProps {
  children?: React.ReactChild[];
  handleLockedCollateralChange?: ({
    lockAmount
  }: {
    lockAmount: number;
  }) => void;
  symbol?: string;
  tokens?: any;
}

// const tokenLogos = {
//   BAT: batLogo,
//   ETH: ethLogo
// }

export const SelectAmount: FC<SelectAmountProps> = props => {
  const { symbol, tokens } = props;
  const selectedToken = tokens.filter(token => token.symbol === symbol)[0];
  const maxAvailableTokens = selectedToken.balance;
  const initialAmount = 0;

  const theme: any = useTheme();
  const [amount, setAmount] = useState(initialAmount);
  const [width, setWidth] = useState(5);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (maxAvailableTokens > initialAmount) {
      setAmount(toCurrency(maxAvailableTokens));
    }
  }, [maxAvailableTokens]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxLength = 8;
    const { value } = event.target;
    const currentAmount = parseFloat(value);

    if (currentAmount < 0) {
      setValid(false);
    } else if (currentAmount > maxAvailableTokens) {
      setValid(false);
    } else {
      setValid(true);
    }

    if (value.length < maxLength) {
      setAmount(currentAmount);
      props.handleLockedCollateralChange({
        lockAmount: currentAmount
      });
      setWidth(value.length);
    }
  };

  const maxRemaining = selectedToken.balance;
  const remaining = selectedToken.balance - amount;
  const constrainedRemaining =
    remaining > maxRemaining ? maxRemaining : remaining < 0 ? 0 : remaining;

  const maxLocked = selectedToken.usdValue;
  const locked = amount * selectedToken.price;
  const constrainedLocked =
    locked > maxLocked ? maxLocked : locked < 0 ? 0 : locked;

  // const coinColor = theme.colors[symbol.toLowerCase()];

  return (
    <Box sx={styles.container}>
      <Text variant="body.small" sx={styles.label}>
        I WANT TO LOCK
      </Text>
      <Input
        id="lockAmount"
        name="lockAmount"
        type="number"
        variant="heading.regular"
        value={amount}
        sx={{
          ...theme.text.heading.regular,
          ...styles.input,
          ...{ width: width + 'ch' },
          ...(!valid ? { bg: 'superLightWarning', borderColor: 'warning' } : {})
        }}
        onChange={handleChange}
      />
      <Text variant="heading.regular" sx={styles.symbol}>{`${symbol}`}</Text>
      {/* <CoinIcon sx={styles.coinIcon(coinColor)} icon={tokenLogos[symbol]} /> */}
      <Text
        sx={{ ...styles.detail, ...styles.lockDetail }}
        variant="body.small"
      >
        <Text as="span">{`Locked: `}</Text>
        <Text as="span" sx={styles.collateralValue}>{`$${toCurrency(
          constrainedLocked
        )}`}</Text>
        {` @ ${toCurrency(selectedToken.price)} USD / ${symbol}`}
      </Text>
      <Text
        sx={{ ...styles.detail, ...styles.remainingBalance }}
        variant="body.small"
      >
        <Text as="span">{`Remaining: `}</Text>
        <Text as="span" sx={styles.collateralValue}>{`${toCurrency(
          constrainedRemaining
        )}`}</Text>
        {` ${symbol}`}
      </Text>
    </Box>
  );
};

SelectAmount.displayName = 'SelectAmount';
