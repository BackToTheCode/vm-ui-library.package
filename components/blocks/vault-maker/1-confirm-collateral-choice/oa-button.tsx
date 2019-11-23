import React from 'react';
import Button, { ButtonProps } from '../../../elements/button/button';
import { CHANGE_COLLATERAL_CHOICE_NUM } from '../../../../constants/step-names';

export interface OAButtonProps extends ButtonProps {
  children: any;
  handleChange?: ({ step }: { step: number }) => void;
}

const style = {
  width: '100%',
  alignContent: 'end',
  borderColor: 'white',
  mt: 4,
  mb: 0
};

const OAButton: React.FC<OAButtonProps> = ({ children, handleChange }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    handleChange({ step: CHANGE_COLLATERAL_CHOICE_NUM });
  };
  return (
    <Button
      onClick={handleClick}
      sx={{
        ...style,
        ...{ alignContent: 'end', borderColor: 'white', mb: 0 }
      }}
      variant="link"
    >
      {children}
    </Button>
  );
};
OAButton.displayName = 'OAButton';

export default OAButton;
