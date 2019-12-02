import React, { FC } from 'react';
import { Box, SxStyleProp } from 'rebass';
import styles from './styles';

export interface HorizontalRuleProps {
  sx?: SxStyleProp;
}

export const HorizontalRule: FC<HorizontalRuleProps> = ({sx}) => {
  return <Box sx={{...styles.rule, ...sx}} />;
};
HorizontalRule.displayName = 'HorizontalRule';
