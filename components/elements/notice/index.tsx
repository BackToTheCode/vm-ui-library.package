import React, { FC } from 'react';
import { Box, Text } from 'rebass';
import { ChildExtension } from '../shared/child-extension';
import styles from './styles';

export interface NoticeProps {
  children?: React.ReactNode & ChildExtension | string;
}

export const Notice: FC<NoticeProps> = props => {
  const { children } = props;
  return (
    <Box sx={styles.container}>
      <Text variant="body.regular" sx={styles.notice}>{children}</Text>
  </Box>
  )
};
  
Notice.displayName = 'Notice';
