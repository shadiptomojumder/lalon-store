"use client";
import { useState } from "react";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { GetCategory } from "@/StaticData/CategoryData/CategoryData";
import { useQuery } from "@tanstack/react-query";

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];

const CategorySelection = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const {
        isLoading,
        data: CategoryList,
        error,
    } = useQuery({
        queryKey: ["category"],
        queryFn: GetCategory,
    });

    // useEffect(() => {
    //     setValue("rice")
    // },[])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {value
                        ? CategoryList &&
                            CategoryList.length > 0 &&
                            CategoryList.find(
                                (category) => category.categoryName === value
                            )?.categoryTitle
                        : "Select category"}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-full">
                <Command className="w-full">
                    <CommandInput
                        placeholder="Search category"
                        className="h-9"
                    />
                    <CommandList>
                        <CommandEmpty>No category found.</CommandEmpty>
                        <CommandGroup>
                            {CategoryList &&
                                CategoryList.length > 0 &&
                                CategoryList.map((category) => {
                                    return (
                                        <CommandItem
                                            key={category.id}
                                            value={category.categoryName}
                                            onSelect={(currentValue) => {
                                                setValue(
                                                    currentValue === value
                                                        ? ""
                                                        : currentValue
                                                );
                                                setOpen(false);
                                            }}
                                        >
                                            {category.categoryTitle}
                                            <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    value ===
                                                        category.categoryName
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    );
                                })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default CategorySelection;
