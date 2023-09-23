import * as React from 'react';
import * as z from 'zod';
import { Meta } from '@storybook/react';
import { Modal } from '../components/ui/modal'; // Adjust the import path accordingly
import { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../components/ui/form';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const meta: Meta = {
  title: 'MyComponents/Modal',
  component: Modal,
  parameters: {
    layout: 'centered' // Adjust this as needed
  },
  tags: ['autodocs']
};

export default meta;

export const ExampleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleSubmit = () => {
    // Handle the form submission here
    // You can add your form logic
    handleClose();
  };
  const formSchema = z.object({
    name: z.string().min(1)
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ''
    }
  });

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        title="Create Category"
        description="Add a new category to manage products and category"
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Admin" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button variant={'outline'}>Cancel</Button>
                <Button type="submit">Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </Modal>
    </>
  );
};
