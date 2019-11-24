/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { CoinIcon } from '../../../../elements/coin-icon';
import { Text, Box } from 'rebass';
import { Radio } from '@rebass/forms';
import styles from './styles';

export interface OptionProps {
  icon: any;
  brand: string;
  name: string;
  symbol?: string;
  tokens?: any[];
  dispatchSelectToken?: ({ selectedToken }: { selectedToken: any }) => void;
}

const Option: React.FC<OptionProps> = props => {
  const { icon, name, brand, symbol, children, tokens } = props;
  const isSelected = name === symbol;

  let mergedStyle = styles.optionStyle;
  if (isSelected) {
    mergedStyle = { ...mergedStyle, ...styles.selectedStyle };
  }

  const handleEvent = (e: any) => {
    e.preventDefault();
    const token = (tokens.filter((token: any) => token.symbol === name))[0];
    props.dispatchSelectToken({ selectedToken: token });
  };

  return (
    <Box sx={mergedStyle} onClick={handleEvent}>
      <Radio
        sx={styles.radioStyle}
        onChange={handleEvent}
        checked={isSelected}
      />
      <Text sx={styles.symbolStyle} variant="heading.regular">
        {children}
      </Text>
      <CoinIcon sx={styles.iconStyle(brand)} icon={icon} />
    </Box>
  );
};

Option.displayName = 'Option';

export default Option;
