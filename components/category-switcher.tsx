"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCategoryModal } from "@/hooks/use-store-modal";
import { useParams,useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronsUpDown,
  PlusCircle,
  Store,
  Store as StoreIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface CategorySwitcherProps extends PopoverTriggerProps {
  items: Record<string, any>[];
}

export default function CategorySwitcher({
  className,
  items = [],
}: CategorySwitcherProps) {
  const categoryModal = useCategoryModal();
  const params = useParams();
  const router = useRouter();
  console.log(params)
  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentCategory = formattedItems.find(
    (item) => item.value === params.categoryId
  );
  const [open, setOpen] = useState(false);
  const onCategorySelect = (category: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${category.value}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          size={"sm"}
          role="combobox"
          aria-expanded={open}
          aria-label="Select a Categories"
          className={cn("w-[200px] justify-between", className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
          {currentCategory?.label}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search Category..." />
            <CommandEmpty>No Category found.</CommandEmpty>

            <CommandGroup heading="Categories">
              {formattedItems.map((category) => (
                <CommandItem
                  key={category.value}
                  onSelect={() => onCategorySelect(category)}
                  className="text-sm"
                >
                  <Store className="mr-2 h-4 w-4" />
                  {category.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentCategory?.value === category.value
                        ? "opacity-100"
                        : "opacity-0"
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
                    setOpen(false);
                    categoryModal.onOpen();
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
}
