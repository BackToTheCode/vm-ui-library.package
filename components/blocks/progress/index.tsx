import React, { Children } from 'react';
import { Box } from 'rebass';

export interface ProgressProps {
    children: any;
}

const Progress: React.FC<ProgressProps> = ({children}) => {
  return (
    <Box>
      {Children.map(children, (child: any) => {

        if (child.type.displayName === 'Step') {
          return React.cloneElement(child, child.props);
        }

        return child;
      })}
    </Box>
  );
};

export default Progress;
