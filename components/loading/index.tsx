/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Heading, Image, SxStyleProp } from 'rebass';
import styles from './styles';
import ringSvg from '../../public/images/rings.svg';

export interface LoadingProps {
  image?: string;
  sx?: SxStyleProp;
  text?: string;
}

export const Loading: FC<LoadingProps> = (props) => {
  const { image, sx, text } = props;
  
  return(
  <Box sx={{...styles.container, ...sx}}>
    <Heading variant="heading.regular" sx={styles.text}>{text}</Heading>
    <Image src={image} sx={styles.image} />
  </Box>
)};

Loading.defaultProps = {
  image: ringSvg,
  text: "Loading..."
}

Loading.displayName = 'Loading';

