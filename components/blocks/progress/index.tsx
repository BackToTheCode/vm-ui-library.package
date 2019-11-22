import React, { Children } from 'react';
import Container from '../../elements/container/';
import Step, { StepProps } from './step';
import styles from './styles';

export interface ProgressProps {
  children: any;
}

type Progress = {
  Step: React.FC<StepProps>;
};

const Progress: React.FC<ProgressProps> & Progress = ({ children }) => {
  return (
    <Container variant="container.default" sx={styles.container}>
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Step') {
          return React.cloneElement(child, child.props );
        }

        return child;
      })}
    </Container>
  );
};

Progress.Step = Step;

export default Progress;
