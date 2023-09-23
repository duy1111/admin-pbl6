import * as React from 'react';
import { Meta } from '@storybook/react';
import CategorySwitcher from '../components/store-switcher'; // Adjust the import path accordingly
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '../components/ui/popover';
import { Button } from '../components/ui/button';
import {
  Check,
  ChevronsUpDown,
  PlusCircle,
  Store,
  Store as StoreIcon
} from 'lucide-react';
import { cn } from '../lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '../components/ui/command';
const meta: Meta = {
  title: 'MyComponents/CategorySwitcher',
  component: CategorySwitcher,
  parameters: {
    layout: 'centered' // Adjust this as needed
  },
  tags: ['autodocs']
};

export default meta;

export const ExampleCategorySwitcher = () => {
  type categories = {
    id: string;
    value: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  const items: Pick<categories[0], 'value' | 'id' | 'userId'>[] = [
    { value: 'Category 1', id: '1', userId: '3' },
    { value: 'Category 2', id: '2', userId: '3' }
    // Add more items as needed
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const className = '';

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          size={'sm'}
          role="combobox"
          aria-label="Select a Categories"
          className={cn('w-[200px] justify-between', className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          {'Category 1'}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search Category..." />
            <CommandEmpty>No Category found.</CommandEmpty>

            <CommandGroup heading="Categories">
              {items.map((category) => (
                <CommandItem
                  key={category.value}
                  onSelect={() => {}}
                  className="text-sm"
                >
                  <Store className="mr-2 h-4 w-4" />
                  {category.value}
                  <Check
                    className={cn(
                      'ml-auto h-4 w-4',
                      'Category 1' === category.value
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    setIsOpen(false);
                    handleClose;
                  }}
                >
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create Category
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
