import React, { Children } from 'react';
import { Box } from 'rebass';
import Option, { OptionProps } from './option';
import CTAButton, { CTAButtonProps } from './cta-button';

export interface ChangeCollateralTypeProps {
  children: any;
  selectedOption: string;
  dispatchChangeCollateral: (payload: string) => void;
}

type SelectCollateral = {
  Option: React.FC<OptionProps>;
  CTAButton: React.FC<CTAButtonProps>;
  Wrapped?: any;
};

const formStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
}

const ChangeCollateralType: React.FC<any> & SelectCollateral = (
  { children, selectedOption, dispatchChangeCollateral }
) => {
  return (
    <Box as="form" sx={formStyle} onSubmit={e => e.preventDefault()}>
      {Children.map(children, (child: any) => {
        
        if (child.type.name === 'Option') {
          const newProps = {...child.props, selectedOption, handleChange: dispatchChangeCollateral}
          return React.cloneElement(child, newProps);
        }

        if (child.type.name === 'CTAButton') {
          return React.cloneElement(child, child.props);
        }

        return child;
      })}
    </Box>
  );
};

ChangeCollateralType.CTAButton = CTAButton;
ChangeCollateralType.Option = Option;

export default ChangeCollateralType;
