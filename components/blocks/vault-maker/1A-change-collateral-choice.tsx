import React, { Fragment, Children, useState } from 'react';
import CoinIcon from '../../elements/icon';
import Button, { IButtonProps } from '../../elements/button/button';
import { Text, Box } from 'rebass';

type SelectCollateral = {
  Option: React.FC<OptionProps>;
  CTAButton: React.FC<IButtonProps>;
};

const ChangeCollateralChoice: React.FC<any> & SelectCollateral = (
  props: any
) => {
  const { children } = props;
  return (
    <Fragment>
      {Children.map(children, (child: any) => {
        if (child.type.name === 'Icon') {
          return React.cloneElement(child, props);
        }

        if (child.type.name === 'CTAButton') {
          return React.cloneElement(child, props);
        }

        return child;
      })}
    </Fragment>
  );
};

export interface OptionProps {
  icon: any;
}

const optionStyle = {
  // borderRadius: '8px',
  cursor: 'pointer',
  flex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  mb: 5,
  borderWidth: '0 0 0 4px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  alignItems: 'center',
  transition: '0.2s all',
  '&:hover': {
    bg: 'lightSecondary',
    transform: 'translateX(-2px)'
  },
};

const selectedStyle  = {
  borderWidth: '0 0 0 4px',
  borderStyle: 'solid',
  borderColor: 'secondary',
  bg: 'lightSecondary'
}

ChangeCollateralChoice.Option = ({ icon, children }) => {
  const [isSelected, setSelected] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setSelected(!isSelected);
  };

  let mergedStyle = optionStyle;
  if (isSelected) {
    mergedStyle = {...mergedStyle, ...selectedStyle};
  }

  return (
    <Box sx={mergedStyle} onClick={handleClick}>
      <Text sx={{ mb: 3 }} variant="heading.large">
        <CoinIcon
          sx={{ mr: '20px', position: 'relative', top: '4px' }}
          icon={icon}
        />
        <Text sx={{ display: 'inline-block' }}>{children}</Text>
      </Text>
    </Box>
  );
};

const style = {
  button: {
    width: '100%',
    mb: 4
  }
};

ChangeCollateralChoice.CTAButton = ({ children }) => (
  <Button
    sx={{ ...style.button, ...{ alignContent: 'end' } }}
    variant="primary"
  >
    {children}
  </Button>
);

export default ChangeCollateralChoice;
