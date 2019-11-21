import React from 'react';
import { Text, TextProps } from 'rebass';

export interface SubHeaderProps extends TextProps {
  children: any;
}

const style = {
  mb: 7,
  color: 'grey',
  mx: 'auto',
  display: 'block',
  textAlign: 'center'
};

const SubHeader = ({ sx, children }: any) => (
  <Text variant="body.regular" sx={{ ...style, ...sx }}>
    {children}
  </Text>
);

SubHeader.displayName = 'SubHeader';

export default SubHeader;
