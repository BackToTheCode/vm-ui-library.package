import React from 'react';
import { Heading, HeadingProps } from 'rebass';
import styles from './styles';

export interface TitleProps extends HeadingProps {
  children: React.ReactNode;
}


const Title: React.FC<TitleProps> = ({ children, sx }) => (
  <Heading sx={{...styles.titleStyle, ...sx}} variant="heading.regular">
    {children}
  </Heading>
);
Title.displayName = "Title";

export default Title;
