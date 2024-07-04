"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import ActionButton from "./ActionButton";
import { DataTableColumnHeader } from "./data-table-column-header";


export type ProductDataType = {
    _id: string;
    productName: string;
    productPrice: string;
    productQuantity: string;
    productCategory: string;
    productDescription: string;
    productImage: string;
    productImageOne: string;
    productImageTwo: string;
    productImageThree: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export const columns: ColumnDef<ProductDataType>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "productName",
        accessorKey: "productName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Product Name" />
        ),
        cell: ({ row }) => (
            <div className="capitalize text-nowrap">{row.getValue("productName")}</div>
        ),
    },
    {
        id: "productPrice",
        accessorKey: "productPrice",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Product Price" />
        ),
        enableSorting: true,
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("productPrice")} taka</div>
        ),
    },
    {
        id: "productQuantity",
        accessorKey: "productQuantity",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Product Quantity" />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("productQuantity")}</div>
        ),
    },
    {
        id: "productCategory",
        accessorKey: "productCategory",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Product Category" />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("productCategory")}</div>
        ),
    },
    {
        id: "productDescription",
        accessorKey: "productDescription",
        header: ({ column }) => (
            <span className="text-nowrap">Product Description</span>
        ),
        cell: ({ row }) => (
            <div className="capitalize line-clamp-2">{row.getValue("productDescription")}</div>
        ),
    },
    {
        id: "productCategory",
        accessorKey: "productCategory",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Product Stoks" />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("productCategory")}</div>
        ),
    },
    {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            const status = row.getValue("status");
            return (
                <>
                    {status === "pending" && (
                        <Badge
                            variant="default"
                            className="bg-[#FFE569] hover:bg-[#FFE569]"
                        >
                            {row.getValue("status")}
                        </Badge>
                    )}
                    {status === "booked" && (
                        <Badge variant="default" className="hover:bg-primary">
                            {row.getValue("status")}
                        </Badge>
                    )}
                    {status === "done" && (
                        <Badge
                            variant="default"
                            className="bg-[#297c0b] hover:bg-[#297c0b] text-gray-200"
                        >
                            {row.getValue("status")}
                        </Badge>
                    )}
                    {status === "failed" && (
                        <Badge variant="destructive">
                            {row.getValue("status")}
                        </Badge>
                    )}
                </>
            );
        },
        filterFn: (row, status, value) => {
            return value.includes(row.getValue(status));
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const product = row.original;
            // console.log("Apointment", apoointment);

            return <ActionButton product={product} />;
        },
    },
];
