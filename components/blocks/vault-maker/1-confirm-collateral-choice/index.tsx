import React, { Fragment, Children } from 'react';
import OAButton, { OAButtonProps } from './oa-button';
import CTAButton, { CTAButtonProps } from './cta-button';
import Title, { TitleProps } from '../shared/title';
import Balance, { BalanceProps } from './balance';

type ChooseCollateral = {
  Balance: React.FC<BalanceProps>;
  Title: React.FC<TitleProps>;
  CTAButton: React.FC<CTAButtonProps>;
  OAButton: React.FC<OAButtonProps>;
  Wrapped?: any;
};

const ConfirmCollateral: React.FC<any> & ChooseCollateral = (props: any) => {
  const { children, dispatchSetStep } = props;

  return (
    <Fragment>
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Icon') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'Balance') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'Title') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'CTAButton') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'OAButton') {
          const newProps = { ...child.props, handleChange: dispatchSetStep };
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

export default ConfirmCollateral;
