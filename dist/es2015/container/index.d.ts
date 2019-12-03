import React, { FC } from 'react';
export interface ContainerProps {
    variant?: string;
    children?: React.ReactNode;
    displayName?: string;
    sx?: any;
}
interface Container {
    displayName?: string;
}
declare const Container: FC<ContainerProps> & Container;
declare const FullContainer: FC<ContainerProps> & Container;
export { FullContainer, Container };
