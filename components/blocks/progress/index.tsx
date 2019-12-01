import { Container } from '@backtothecode/vault-maker-ui';
import React, { Children, FC } from 'react';
import { Step, StepProps } from './step';
import styles from './styles';

export interface ProgressProps {
  children: any;
}

export interface Progress {
  Step: React.FC<StepProps>;
};

export const Progress: FC<ProgressProps> & Progress = ({ children }) => {
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

