import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../components/ui/input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'main/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: 'chon',
    className: 'text-sm ',
    type: 'text'
  }
};

export const Checkbox: Story = {
  args: {
    placeholder: 'chon',
    className: 'text-sm',
    type: 'checkbox'
  }
};

export const Date: Story = {
  args: {
    placeholder: 'chon',
    className: '',
    type: 'date'
  }
};

export const Datetime: Story = {
  args: {
    placeholder: 'chon',
    className: '',
    type: 'datetime-local'
  }
};

export const Disabled: Story = {
  args: {
    placeholder: 'chon',
    className: '',
    type: 'email',
    disabled: true
  }
};

export const Email: Story = {
  args: {
    placeholder: 'chon',
    className: '',
    type: 'email'
  }
};

export const File: Story = {
  args: {
    placeholder: 'chon',
    className: '',
    type: 'file'
  }
};

export const Range: Story = {
  args: {
    placeholder: 'chon',
    className: '',
    type: 'range'
  }
};

export const Radio: Story = {
  args: {
    placeholder: 'chon',
    className: '',
    type: 'radio'
  }
};

export const Search: Story = {
  args: {
    placeholder: 'chon',
    className: '',
    type: 'search'
  }
};

export const Week: Story = {
  args: {
    placeholder: 'chon',
    className: '',
    type: 'week'
  }
};

export const Month: Story = {
  args: {
    placeholder: 'chon',
    className: '',
    type: 'month'
  }
};
