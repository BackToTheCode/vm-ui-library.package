/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Box, Image, Text } from 'rebass';
import ringsImg from '../../../public/images/rings.svg';

// export interface ILoadingProps {
//     isLoading: boolean;
// }

const baseStyle = {
  text: {
    fontWeight: 'body',
    fontSize: 2,
    fontFamily: 'body',
    textAlign: 'center',
    color: 'grey',
    mt: 5,
    position: 'relative',
    right: '-5px'
  },
  image: {
    width: '120px'
  }
};

const Loading: React.FC<{}> = () => (
  <Box>
    <Image src={ringsImg} sx={baseStyle.image}></Image>
    <Text sx={baseStyle.text}>loading...</Text>
  </Box>
);

export default Loading;
