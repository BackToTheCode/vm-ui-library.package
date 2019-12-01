import React, { Children, FC, Fragment } from 'react';
import {
  LOCK_COLLATERAL_NUM,
} from '../../../../constants/step-names';
import { CTAButton, CTAButtonProps } from '../shared/cta-button';
import { Title, TitleProps } from '../shared/title';
import { ChildExtension } from './../shared/child-extension';
import { Balance, BalanceProps } from './balance';
import { OAButton, OAButtonProps } from './oa-button';

export interface ChooseCollateral {
  Balance: FC<BalanceProps>;
  Title: FC<TitleProps>;
  CTAButton: FC<CTAButtonProps>;
  OAButton: FC<OAButtonProps>;
  Wrapped?: FC<ChooseCollateralProps>;
}

export interface ChooseCollateralProps {
  children: React.ReactNode;
  dispatchStep?: ({ step }: { step: number }) => void;
}

export const ConfirmCollateral: FC<ChooseCollateralProps> &
  ChooseCollateral = props => {
  const { children, dispatchStep } = props;

  return (
    <Fragment>
      {Children.map(children, (child: React.ReactElement & ChildExtension) => {
        if (child.type.displayName === 'CoinIcon') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'Balance') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'Title') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'CTAButton') {
          const newProps: CTAButtonProps = { ...child.props, dispatchStep, step: LOCK_COLLATERAL_NUM };
          return React.cloneElement(child, newProps);
        }

        if (child.type.displayName === 'OAButton') {
          const newProps: OAButtonProps = { ...child.props, handleChange: dispatchStep };
          return React.cloneElement(child, newProps);
        }

        return child;
      })}
    </Fragment>
  );
};

ConfirmCollateral.Balance = Balance;
ConfirmCollateral.Title = Title;
ConfirmCollateral.CTAButton = CTAButton;
ConfirmCollateral.OAButton = OAButton;
