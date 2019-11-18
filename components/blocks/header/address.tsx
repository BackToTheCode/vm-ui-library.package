/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Flex, Box, Text } from 'rebass';

export interface IAddressProps {
  variant?: string;
  children?: React.ReactNode;
  address?: string;
  ern?: string;
  connected?: boolean;
}

const styles = {
  container: {
    width: '100%',
    justifyContent: 'flex-end',
    mr: 20,
    alignItems: 'center'
  },
  indicator: {
    borderRadius: '50%',
    position: 'relative',
    width: '8px',
    height: '8px',
    right: 6,
    top: 6
  },
  addressContainer: {
    px: 4,
    py: 3,
    bg: 'lightGrey',
    borderRadius: '4px'
  }
};

const Address: React.FC<IAddressProps> = ({ connected, address, ern }) => {

  const variant = connected ? 'indicator.connected' : 'indicator.unconnected';

  return (
    <Flex width={1} sx={styles.container}>
      <Box
        sx={{ textAlign: 'left', flexDirection: 'column', maxWidth: '130px' }}
      >
        <Box variant={variant} sx={styles.indicator} />
        <Box sx={styles.addressContainer}>
          <Text
            sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
            variant={'body.regular'}
          >
            {address ? address : 'Not connected'}
          </Text>
        </Box>
        {ern && (
          <Box sx={{ marginTop: 2 }}>
            <Text variant={'body.small'} sx={{ color: 'grey' }}>
              {ern}
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default Address;
