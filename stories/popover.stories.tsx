import * as React from 'react';
import { Meta } from '@storybook/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '../components/ui/popover'; // Adjust the import path accordingly
import { Button } from '../components/ui/button'; // Assuming you have a button component for triggering the popover
import { useState } from 'react';

const meta: Meta = {
  title: 'main/Popover',
  component: Popover,
  parameters: {
    layout: 'centered' // Adjust this as needed
  },
  tags: ['autodocs']
};

export default meta;

export const ExamplePopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="category-switcher-container">
      <Popover
        open={isOpen}
        onOpenChange={(newOpenState) => setIsOpen(newOpenState)}
      >
        <PopoverTrigger asChild>
          <Button onClick={() => setIsOpen(!isOpen)}>Toggle Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          {/* Your content here */}
          <p>This is the content of the popover.</p>
        </PopoverContent>
      </Popover>
    </div>
  );
};
