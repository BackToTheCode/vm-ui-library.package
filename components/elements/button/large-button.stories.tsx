import React from 'react';
import marked from 'marked';
import { LargeButton } from './button';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Elements/Large Button',
  component: LargeButton,
  componentSubtitle: 'Displays a large button that may be clicked to initiate an action',
  parameters: {
    info: {
      inline: true,
      header: false,
      text: marked(require('./button.stories.md').default)
    }
  },
  decorators: [checkA11y]
};

export const Primary = () => (
  <LargeButton
    variant={'primary'}
  >
    Hello
  </LargeButton>
);
Primary.story = {
  decorators: [withKnobs]
};

export const Secondary = () => (
  <LargeButton
    variant={'secondary'}
  >
    Goodbye
  </LargeButton>
);

export const Outline = () => (
  <LargeButton variant={'outline'} >Goodbye</LargeButton>
);


export const WithKnobs = () => (
  <LargeButton variant={select('Variant', ['primary', 'secondary', 'outline'], 'primary')}>Change me</LargeButton>
);
WithKnobs.story = {
  decorators: [withKnobs]
};


