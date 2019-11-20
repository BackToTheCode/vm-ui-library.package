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
    handleChange?: (e: any) => void;
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
  
  const Option: React.FC<OptionProps> = ({ icon, name, brand, selectedOption, handleChange, children }) => {
    const isSelected = name === selectedOption;
    
    let mergedStyle = optionStyle;
    if (isSelected) {
      mergedStyle = { ...mergedStyle, ...selectedStyle };
    }

    const handleClick = (e: any) => {
        e.preventDefault();
        handleChange(name);
    }
  
    return (
      <Box sx={mergedStyle} onClick={handleClick}>
        <Radio sx={{ml: '20px', mr: '20px'}} checked={isSelected} />
        <Text sx={{ display: 'inline-block', ml: 5 }} variant="heading.large">
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