import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmailButton } from '@branch/ui-core'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '@branch/ui-core/EmailButton',
  component: EmailButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof EmailButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EmailButton> = (args) => <EmailButton {...args}>Test Button</EmailButton>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};

