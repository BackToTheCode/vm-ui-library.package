import React, { FC } from 'react';
import { SxStyleProp } from 'rebass';
export declare type ButtonProps = {
    /** Click handler */
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Button variants */
    variant?: "primary" | "secondary" | "outline" | "text";
    isDisabled?: boolean;
    children?: React.ReactNode;
    /** System-UI style prop */
    sx?: SxStyleProp;
};
export declare const Button: FC<ButtonProps>;
