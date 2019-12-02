import React, { Children, FC, Fragment } from 'react';
import {
  COMPLETE_VAULT_NUM,
  CONFIRM_VAULT_NUM
} from '../../../../constants/step-names';
import { CTAButton, CTAButtonProps } from '../../../elements/cta-button';
import {
  HorizontalRule,
  HorizontalRuleProps
} from '../../../elements/horizontal-rule';
import { Notice, NoticeProps } from '../../../elements/notice';
import { OAButton, OAButtonProps } from '../../../elements/oa-button';
import { Title, TitleProps } from '../../../elements/title';

export interface OpenVaultProps {
  children: React.ReactNode;
  dispatchStep: ({ step }: { step: number }) => void;
}

export interface OpenVault {
  Title: FC<TitleProps>;
  Notice: FC<NoticeProps>;
  HorizontalRule: FC<HorizontalRuleProps>;
  CTAButton: FC<CTAButtonProps>;
  OAButton: FC<OAButtonProps>;
  Wrapped?: any;
}

export const OpenVault: FC<OpenVaultProps> & OpenVault = props => {
  const { children, dispatchStep } = props;

  return (
    <Fragment>
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Title') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'Notice') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'HorizontalRule') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'CTAButton') {
          const newProps: CTAButtonProps = {
            ...child.props,
            dispatchStep,
            step: COMPLETE_VAULT_NUM
          };
          return React.cloneElement(child, newProps);
        }

        if (child.type.displayName === 'OAButton') {
          const newProps: OAButtonProps = {
            ...child.props,
            dispatchStep,
            step: CONFIRM_VAULT_NUM
          };
          return React.cloneElement(child, newProps);
        }

        return child;
      })}
    </Fragment>
  );
};
OpenVault.displayName = 'OpenVault';

OpenVault.Title = Title;
OpenVault.OAButton = OAButton;
OpenVault.CTAButton = CTAButton;
OpenVault.Notice = Notice;
OpenVault.HorizontalRule = HorizontalRule;
