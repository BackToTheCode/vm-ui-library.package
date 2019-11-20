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
    selectedOption?: string;
    dispatchSetCollateral?: (payload: string) => void;
    dispatchSetOption?: (payload: string) => void;
  }
  
  const optionStyle = {
    borderRadius: '8px',
    cursor: 'pointer',
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
    mb: 5,
    alignItems: 'center',
    transition: '0.2s all',
    '&:hover': {
      bg: 'lightGrey',
      transform: 'translateX(-1px)'
    }
  };
  
  const selectedStyle = {
    bg: 'lightGrey'
  };
  
  const Option: React.FC<OptionProps> = ({ icon, name, brand, selectedOption, dispatchSetOption, dispatchSetCollateral, children }) => {
    const isSelected = name === selectedOption;
    
    console.log('dispatchSetOption', dispatchSetOption)
    console.log('dispatchSetCollateral', dispatchSetCollateral)

    let mergedStyle = optionStyle;
    if (isSelected) {
      mergedStyle = { ...mergedStyle, ...selectedStyle };
    }

    const handleEvent = (e: any) => {
        e.preventDefault();
        dispatchSetOption(name);
        dispatchSetCollateral(children.toString())
    }
  
    return (
      <Box sx={mergedStyle} onClick={handleEvent}>
        <Radio sx={{ml: '20px', mr: '20px'}} onChange={handleEvent} checked={isSelected} />
        <Text sx={{ display: 'inline-block', ml: 5 }} variant="heading.regular">
          {children}
        </Text>
        <CoinIcon
          sx={{ ml: '20px', bg: brand }}
          icon={icon}
        />
      </Box>
    );
  };

  export default Option;