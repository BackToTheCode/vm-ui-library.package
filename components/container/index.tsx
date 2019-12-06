/** @jsx jsx */
import { UIComponent } from '../interfaces/shared';
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Box, Flex } from 'rebass';
import styles from './styles';

export interface ContainerProps {
  sx?: object;
}

export interface GridContainerProps {
  sx?: object;
}

const Container: FC<ContainerProps> & UIComponent = (props) => {
  const { base } = styles;
  const { sx } = props;
  return (
    <Flex {...props} sx={{...base, ...sx }} />
  );
};

const TallContainer: FC<ContainerProps> & UIComponent = (props) => {
const { tall} = styles;
const { sx } = props;
return <Container {...props} sx={{...tall, ...sx}} />
};

const GridContainer: FC<GridContainerProps> & UIComponent = (props) => {
  const { base, grid } = styles;
  const { sx } = props;
  return (
    <Box {...props} sx={{...base, ...grid, ...sx}} />
  )
}

Container.displayName = 'Container';
GridContainer.displayName = 'GridContainer';
TallContainer.displayName = 'TallContainer';

export { GridContainer, TallContainer, Container };
