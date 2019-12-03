import { FC } from 'react';
import { SxStyleProp } from 'rebass';
export interface LargeButtonProps {
    /** Click handler */
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /** Button variants */
    variant: 'primary' | 'secondary' | 'outline' | 'text';
    isDisabled?: boolean;
    children?: React.ReactNode;
    /** System-UI style prop */
    sx?: SxStyleProp;
}
export declare const LargeButton: FC<LargeButtonProps>;
