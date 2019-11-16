import React from 'react';
import Button from "./button";
import { checkA11y } from '@storybook/addon-a11y';

export default {
  title: 'Button',
  component: Button,
  decorators: [checkA11y],
}

const primaryButtonProps = { variant: 'primary'};
const secondaryButtonProps = { variant: 'secondary'};
const tertiaryButtonProps = { variant: 'outline'};

export const primaryButton = () => <Button {...primaryButtonProps}>Hello</Button>;
export const secondaryButton = () => <Button {...secondaryButtonProps}>Goodbye</Button>
export const outlineButton = () => <Button {...tertiaryButtonProps}>Goodbye</Button>

