import { checkA11y } from '@storybook/addon-a11y';
import { select, withKnobs } from '@storybook/addon-knobs';
import marked from 'marked';
import React from 'react';
import { Card } from '../card';

export default {
  component: Card,
  decorators: [checkA11y],
  parameters: {
    info: {
      header: true,
      inline: true,
      text: marked(require('./card.stories.md').default)
    }
  },
  title: 'Elements|Card'
};

export const Default = () => <Card sx={{height: '500px', bg: 'superLightGrey'}}/>
