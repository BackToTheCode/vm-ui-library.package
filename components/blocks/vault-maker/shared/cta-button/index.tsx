/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Button }  from '../../../../elements/button/button';
import { CONFIRM_COLLATERAL_CHOICE_NUM } from '../../../../../constants/step-names';
import styles from './styles';

export interface CTAButtonProps {
  dispatchStep?: ({ step }: { step: number }) => void;
}

const CTAButton: React.FC<CTAButtonProps> = props => {
  const { children } = props;
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    props.dispatchStep({ step: CONFIRM_COLLATERAL_CHOICE_NUM });
  };
  return (
    <Button sx={styles.ctaButtonStyle} variant="primary" onClick={handleClick}>
      {children}
    </Button>
  );
};
CTAButton.displayName = 'CTAButton';

export default CTAButton;
