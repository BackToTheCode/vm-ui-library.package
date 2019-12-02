import React, { Children, FC, Fragment } from 'react';
import {
  DRAW_DAI_NUM,
  OPEN_VAULT_NUM
} from '../../../../constants/step-names';
import { CTAButton, CTAButtonProps } from '../../../elements/cta-button';
import { Notice, NoticeProps } from '../../../elements/notice';
import { OAButton, OAButtonProps } from '../../../elements/oa-button';
import { Title, TitleProps } from '../../../elements/title';
import { VaultDetail, VaultDetailProps } from './vault-detail';

export interface ConfirmVault {
  CTAButton: FC<CTAButtonProps>;
  Notice: FC<NoticeProps>;
  OAButton: FC<OAButtonProps>;
  Title: FC<TitleProps>;
  VaultDetail: FC<VaultDetailProps>;
  Wrapped?: any;
}

export interface ConfirmVaultProps {
  children: React.ReactNode;
  price: number;
  ratio: number;
  symbol: string;
  tokens: any[];
  lockAmount: number;
  drawAmount: number;
  dispatchStep: ({ step }: { step: number }) => void;
}

export const ConfirmVault: FC<ConfirmVaultProps> & ConfirmVault = props => {
  const {
    children,
    price,
    ratio,
    symbol,
    tokens,
    lockAmount,
    drawAmount,
    dispatchStep
  } = props;

  return (
    <Fragment>
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Title') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'VaultDetail') {
          const newProps: VaultDetailProps = {
            ...child.props,
            drawAmount,
            lockAmount,
            price,
            ratio,
            symbol,
            tokens
          };
          return React.cloneElement(child, newProps);
        }

        if (child.type.displayName === 'Notice') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'CTAButton') {
          const newProps: CTAButtonProps = {
            ...child.props,
            dispatchStep,
            step: OPEN_VAULT_NUM
          };
          return React.cloneElement(child, newProps);
        }

        if (child.type.displayName === 'OAButton') {
          const newProps: OAButtonProps = {
            ...child.props,
            dispatchStep,
            step: DRAW_DAI_NUM
          };
          return React.cloneElement(child, newProps);
        }

        return child;
      })}
    </Fragment>
  );
};

ConfirmVault.Title = Title;
ConfirmVault.Notice = Notice;
ConfirmVault.CTAButton = CTAButton;
ConfirmVault.OAButton = OAButton;
ConfirmVault.VaultDetail = VaultDetail;
