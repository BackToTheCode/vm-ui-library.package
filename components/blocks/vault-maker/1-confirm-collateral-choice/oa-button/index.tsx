import { Button } from '@backtothecode/vault-maker-ui/dist/cjs/index';
import React, { FC, ReactNode } from 'react';
import { CHANGE_COLLATERAL_NUM } from '../../../../../constants/step-names';
import styles from './styles';

export interface OAButtonProps {
  children: ReactNode;
  handleChange?: ({ step }: { step: number }) => void;
}

export const OAButton: FC<OAButtonProps> = ({ children, handleChange }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleChange({ step: CHANGE_COLLATERAL_NUM });
  };
  return (
    <Button onClick={handleClick} sx={styles.oaButtonStyle} variant="text">
      {children}
    </Button>
  );
};
OAButton.displayName = 'OAButton';

