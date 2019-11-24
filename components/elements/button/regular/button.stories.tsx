import React from 'react';
import marked from 'marked';
import { Button } from '../regular';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Elements|Button',
  component: Button,
  parameters: {
    info: {
      inline: true,
      header: false,
      text: marked(require('../button.stories.md').default)
    }
  },
  decorators: [checkA11y]
};

export const Primary = () => <Button variant={'primary'}>Go</Button>;

export const Secondary = () => <Button variant={'secondary'}>Go here</Button>;

export const Outline = () => <Button variant={'outline'}>Go back</Button>;

export const Text = () => <Button variant={'text'}>Click me</Button>;

export const WithKnobs = () => (
  <Button
    variant={select('Variant', ['primary', 'secondary', 'outline'], 'primary')}
  >
    Change me
  </Button>
);
WithKnobs.story = {
  decorators: [withKnobs]
};
