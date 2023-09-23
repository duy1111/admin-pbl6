import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../components/ui/badge';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'main/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    className: '',
    variant: 'default',
    children: 'Test'
  }
};
export const Destructive: Story = {
  args: {
    className: '',
    variant: 'destructive',
    children: 'Test'
  }
};
export const Outline: Story = {
  args: {
    className: '',
    variant: 'outline',
    children: 'Test'
  }
};

export const Secondary: Story = {
  args: {
    className: '',
    variant: 'secondary',
    children: 'Test'
  }
};
