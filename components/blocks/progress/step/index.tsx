import React, { FC } from 'react';
import { Box } from 'rebass';
import styles from './styles';

export interface StepProps {
  complete?: boolean;
}

export const Step: FC<StepProps> = ({ complete }) => {
  return <Box sx={{ ...styles.step, ...(complete ? styles.complete : {}) }} />;
};

Step.displayName = 'Step';
