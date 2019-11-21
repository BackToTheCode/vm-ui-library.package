/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Flex, Box, Text } from 'rebass';
import styles from './styles';

export interface IAddressProps {
  variant?: string;
  children?: React.ReactNode;
  address?: string;
  ern?: string;
  connected?: boolean;
}

const Address: React.FC<IAddressProps> = ({ connected, address, ern }) => {
  const variant = connected ? 'indicator.connected' : 'indicator.unconnected';
  console.log('address', address)
  const connectedMessage = connected
    ? address
      ? address
      : 'Connected'
    : 'Not connected';

  return (
    <Flex width={1} sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box variant={variant} sx={styles.indicator} />
        <Box sx={styles.addressContainer}>
          <Text
            sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
            variant={'body.regular'}
          >
            {connectedMessage}
          </Text>
        </Box>
        {ern && (
          <Box sx={styles.ernContainer}>
            <Text variant={'body.small'} sx={styles.ern}>
              {ern}
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};
Address.displayName = 'Address';

export default Address;
