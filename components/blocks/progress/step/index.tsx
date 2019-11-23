import React from 'react';
import { Box } from 'rebass';
import styles from './styles';

export interface StepProps {
  complete?: boolean;
}

const Step: React.FC<StepProps> = ({ complete }) => {
  let mergedStyles = Object.create({});
  mergedStyles.step = styles.step;
  if (complete) {
    mergedStyles.complete = styles.complete
  }

  return <Box sx={{...mergedStyles.step, ...mergedStyles.complete}}></Box>;
};

Step.displayName = 'Step';

export default Step;
