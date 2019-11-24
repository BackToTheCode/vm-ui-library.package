import React from 'react';
import { Button } from './button';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Elements/Button',
  component: Button,
  componentSubtitle: 'Displays a button that may be clicked to initiate an action', 
  decorators: [checkA11y]
};    

export const Primary = () => (
  <Button
    variant={'primary'}
  >
    Hello
  </Button>
);


export const Secondary = () => (
  <Button
    variant={'secondary'}
  >
    Goodbye
  </Button>
);

export const Outline = () => (
  <Button variant={'outline'} >Goodbye</Button>
);


export const WithKnobs = () => (
  <Button variant={select('Variant', ['primary', 'secondary', 'outline'], 'primary')}>Change me</Button>
);
WithKnobs.story = {
  decorators: [withKnobs]
};


