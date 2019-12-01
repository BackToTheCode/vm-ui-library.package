import { Button } from '@backtothecode/vault-maker-ui/dist/cjs/index';
import React, { FC, ReactNode } from 'react';
import { CHANGE_COLLATERAL_NUM } from '../../../../../constants/step-names';
import styles from './styles';

export interface OAButtonProps {
  children: ReactNode;
  step?: number;
  dispatchStep?: ({ step }: { step: number }) => void;
}

export const OAButton: FC<OAButtonProps> = (props) => {
  const { children, step } = props;
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    props.dispatchStep({ step });
  };
  return (
    <Button onClick={handleClick} sx={styles.button} variant="text">
      {children}
    </Button>
  );
};
OAButton.displayName = 'OAButton';

