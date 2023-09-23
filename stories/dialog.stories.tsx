import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '../components/ui/dialog';

const meta: Meta = {
  title: 'main/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const ExampleDialog = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenChange = (newOpenState: boolean) => {
    setIsOpen(newOpenState);

    // Call the onOpenChange callback with the new open state
    // You can replace this with your actual callback logic
    console.log('Dialog is now', newOpenState ? 'open' : 'closed');
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => handleOpenChange(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Example Title</DialogTitle>
          <DialogDescription>Example Description</DialogDescription>
        </DialogHeader>
        <div>Content goes here</div>
      </DialogContent>
    </Dialog>
  );
};
