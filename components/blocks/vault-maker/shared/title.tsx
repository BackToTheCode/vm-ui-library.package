import React from 'react';
import { Heading, HeadingProps } from 'rebass';


export interface TitleProps extends HeadingProps {
  children: any;
}

const baseStyle = {
  flex: 1
};

const Title: React.FC<TitleProps> = ({ children, sx }) => (
  <Heading sx={{...baseStyle, ...sx}} variant="heading.regular">
    {children}
  </Heading>
);
Title.displayName = "Title";

export default Title;
