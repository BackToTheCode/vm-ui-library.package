/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Image, Text, Heading } from 'rebass';
import styles from './styles';
import ringSvg from '../../public/images/rings.svg';

export interface LoadingProps {
  image?: string;
  text?: string;
}

export const Loading: FC<LoadingProps> = (props) => {
  const { image, text } = props;
  
  return(
  <Box sx={styles.container}>
    <Heading variant="heading.regular" sx={styles.text}>{text}</Heading>
    <Image src={image} sx={styles.image}></Image>
  </Box>
)};

Loading.defaultProps = {
  image: ringSvg,
  text: "Loading..."
}

Loading.displayName = 'Loading';

