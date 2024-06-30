"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import ActionButton from "./ActionButton";
import { DataTableColumnHeader } from "./data-table-column-header";

// You can use a Zod schema here if you want.
export type AppointmentData = {
    // Define the structure of your appointmentData prop here
    _id: string;
    categoryName: string;
    categoryImage: string;
    phone: string;
    address: string;
    service: string;
    appointmentDate: string;
    appointmentTime: string;
    message: string;
    status: "pending" | "booked" | "done" | "failed";
    createdBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export const columns: ColumnDef<AppointmentData>[] = [
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
        id: "categoryName",
        accessorKey: "categoryName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Category Name" />
        ),
        cell: ({ row }) => (
            <div className="capitalize text-nowrap">{row.getValue("categoryName")}</div>
        ),
    },
    {
        id: "categoryImage",
        accessorKey: "categoryImage",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Category Image" />
        ),
        enableSorting: true,
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("categoryImage")}</div>
        ),
    },
    {
        id: "appointmentTime",
        accessorKey: "appointmentTime",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Appointment Time" />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("appointmentTime")}</div>
        ),
    },
    {
        id: "phone",
        accessorKey: "phone",
        header: "Phone",
        cell: ({ row }) => (
            <div className="capitalize">+88{row.getValue("phone")}</div>
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
            const apoointment = row.original;
            // console.log("Apointment", apoointment);

            return <ActionButton apoointment={apoointment} />;
        },
    },
];
