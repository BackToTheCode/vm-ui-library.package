/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import CoinIcon from '../../../elements/icon';
import { Text, Box } from 'rebass';
import { Radio } from '@rebass/forms';

export interface OptionProps {
  icon: any;
  brand: string;
  name: string;
  selectedToken?: string;
  tokens?: any[];
  dispatchSelectToken?: ({ selectedToken }: { selectedToken: any }) => void;
}

const optionStyle = {
  borderRadius: '8px',
  cursor: 'pointer',
  flex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'left',
  mb: 3,
  mt: 3,
  alignItems: 'center',
  transition: '0.2s all',
  '&:hover': {
    bg: 'superLightSecondary',
    transform: 'translateX(-1px)'
  }
};

const selectedStyle = {
  bg: 'superLightSecondary'
};

const Option: React.FC<OptionProps> = props => {
  const { icon, name, brand, selectedToken, children, tokens } = props;
  const isSelected = name === selectedToken;

  let mergedStyle = optionStyle;
  if (isSelected) {
    mergedStyle = { ...mergedStyle, ...selectedStyle };
  }

  const handleEvent = (e: any) => {
    e.preventDefault();
    console.log('TOKENS', tokens);
    const token = tokens.filter((token: any) => token.symbol === name);
    props.dispatchSelectToken({ selectedToken: token });
  };

  return (
    <Box sx={mergedStyle} onClick={handleEvent}>
      <Radio
        sx={{ ml: '20px', mr: '20px' }}
        onChange={handleEvent}
        checked={isSelected}
      />
      <Text sx={{ display: 'inline-block', ml: 5 }} variant="heading.regular">
        {children}
      </Text>
      <CoinIcon sx={{ ml: '20px', bg: brand }} icon={icon} />
    </Box>
  );
};

Option.displayName = 'Option';

export default Option;
