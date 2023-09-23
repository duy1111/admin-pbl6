import type { Meta, StoryObj } from '@storybook/react';
import { Loader2 } from 'lucide-react';

import { Button } from '../components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'main/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Null: Story = {
  args: {
    children: 'Button',
    asChild: false,
    className: '',
    type: 'button'
  }
};

export const Default: Story = {
  args: {
    children: 'Button',
    asChild: false,
    variant: 'default',
    className: '',
    type: 'button'
  }
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    asChild: false,
    variant: 'destructive',
    className: '',
    type: 'button'
  }
};

export const Outline: Story = {
  args: {
    children: 'Button',
    asChild: false,
    variant: 'outline',
    className: '',
    type: 'button'
  }
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    asChild: false,
    variant: 'ghost',
    className: '',
    type: 'button'
  }
};

export const Link: Story = {
  args: {
    children: 'Button',
    asChild: false,
    variant: 'link',
    className: '',
    type: 'button'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    asChild: false,
    variant: 'secondary',
    className: '',
    type: 'button'
  }
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </>
    ),
    asChild: false,
    variant: 'secondary',
    className: '',
    type: 'button',
    disabled: true
  }
};
