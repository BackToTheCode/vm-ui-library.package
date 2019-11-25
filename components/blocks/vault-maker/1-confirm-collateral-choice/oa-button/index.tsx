import { Button } from '@backtothecode/vault-maker-ui';
import { FC } from 'react';
import { CHANGE_COLLATERAL_CHOICE_NUM } from '../../../../../constants/step-names';
import styles from './styles';

export interface OAButtonProps {
  children: React.ReactNode;
  handleChange?: ({ step }: { step: number }) => void;
}

const OAButton: FC<OAButtonProps> = ({ children, handleChange }) => {
  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    handleChange({ step: CHANGE_COLLATERAL_CHOICE_NUM });
  };
  return (
    <Button
      onClick={handleClick}
      sx={styles.oaButtonStyle}
      variant="text"
    >
      {children}
    </Button>
  );
};
OAButton.displayName = 'OAButton';

export default OAButton;
