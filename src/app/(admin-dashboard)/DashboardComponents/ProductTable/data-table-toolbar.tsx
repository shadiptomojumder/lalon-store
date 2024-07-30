"use client";

import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui//button";
import { Input } from "@/components/ui//input";
import { DataTableViewOptions } from "./data-table-view-options";

import { format } from "date-fns";
import { statuses } from "./data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import DataTableFilterByDate from "./data-table-sortby-date";
import { TbCategoryPlus } from "react-icons/tb";
import CreateCategoryModal from "./CreateProductModal";

const todayOption = {
  label: "Today",
  value: format(new Date(), "dd MMMM yyyy"),
  icon: CheckIcon,
};
const tomorrowOption = {
  label: "Tomorrow",
  value: format(
    new Date(new Date().setDate(new Date().getDate() + 1)),
    "dd MMMM yyyy"
  ),
  icon: CheckIcon,
};
const data = [
  {
    label: "Today",
    value: format(new Date(), "dd MMMM yyyy"),
    icon: CheckIcon,
  },
  {
    label: "Tomorrow",
    value: format(
      new Date(new Date().setDate(new Date().getDate() + 1)),
      "dd MMMM yyyy"
    ),
    icon: CheckIcon,
  },
];

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  setFiltering: (filtering: string) => void;
  filtering: string;
}

export function DataTableToolbar<TData>({
  table,
  filtering,
  setFiltering,
}: DataTableToolbarProps<TData>) {
  // Check if specific facet filters are active
  const isFacetFiltered = table
    .getState()
    .columnFilters.some(
      (filter) => filter.id === "status" || filter.id === "priority"
    );

  return (
    <div className="flex md:flex-row flex-col gap-3 items-center justify-between overflow-x-auto">
      <section className="flex gap-4 items-center md:justify-start justify-between md:w-fit w-full">
        <div className="w-1/2 md:w-fit">
          <Input
            placeholder="Filter by anything..."
            value={filtering}
            onChange={(event) => setFiltering(event.target.value)}
            className="md:min-w-[250px] w-full focus-visible:border-primary focus-visible:ring-0"
          />
        </div>

        <div className="w-1/2 md:w-fit">
          {table.getColumn("productCategory") && (
            <DataTableFacetedFilter
              column={table.getColumn("productCategory")}
              title="Categories"
              options={statuses}
            />
          )}
        </div>
      </section>

      <section className="flex items-center gap-4 md:w-fit w-full">
        <div className="w-1/2 md:w-fit">
          <CreateCategoryModal/>
        </div>


        <div className="w-1/2 md:w-fit">
          <DataTableViewOptions table={table} />
        </div>
      </section>
    </div>
  );
}
