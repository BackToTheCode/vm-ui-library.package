import React, { Children } from 'react';
import { Box } from 'rebass';
import Option, { OptionProps } from './option';
import CTAButton, { CTAButtonProps } from './cta-button';
import Title, { TitleProps } from '../shared/title';
import HorizontalRule from './horizontal-rule';

export interface ChangeCollateralTypeProps {
  children: any;
  symbol: string;
  tokens: any[];
  dispatchSelectToken: (payload: string) => void;
  dispatchStep: (payload: string) => void;
}

type SelectCollateral = {
  Option: React.FC<OptionProps>;
  CTAButton: React.FC<CTAButtonProps>;
  Title: React.FC<TitleProps>;
  HorizontalRule: any;
  Wrapped?: any;
};

const formStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
};

const ChangeCollateralType: React.FC<ChangeCollateralTypeProps> &
  SelectCollateral = props => {
    console.log('PROPS', props);
  const { children, symbol, tokens, dispatchSelectToken, dispatchStep } = props;
  return (
    <Box as="form" sx={formStyle} onSubmit={e => e.preventDefault()}>
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Option') {
          const newProps = {
            ...child.props,
            tokens,
            selectedToken: symbol,
            dispatchSelectToken
          };
          return React.cloneElement(child, newProps);
        }

        if (child.type.displayName === 'Title') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'HorizontalRule') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'CTAButton') {
          return React.cloneElement(child, { ...child.props, dispatchStep });
        }

        return child;
      })}
    </Box>
  );
};

ChangeCollateralType.CTAButton = CTAButton;
ChangeCollateralType.Title = Title;
ChangeCollateralType.Option = Option;
ChangeCollateralType.HorizontalRule = HorizontalRule;

export default ChangeCollateralType;
