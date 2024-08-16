"use client";
import GetAllProducts from "@/api/product/getAllProducts";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../OrderTable/data-table";
import { columns } from "../OrderTable/columns";
import { ProductTableLoading } from "../../DashboardComponents/ProductTableLoading/ProductTableLoading";
import GetAllOrder from "@/api/orders/getAllOrder";

const DashboardOrdersPage = () => {


    const { isLoading, data: productlist } = useQuery({
        queryKey: ["productlist", "","newest"],
        queryFn: GetAllProducts,
    });
    const { data: ordertlist } = useQuery({
        queryKey: [],
        queryFn: GetAllOrder,
    });

    console.log("ordertlist is :", ordertlist);

    return (
        <>
            <h2 className="text-lg font-semibold p-5">Order List</h2>
            <section className="">
                {isLoading ? (
                    <ProductTableLoading />
                ) : (
                    <DataTable columns={columns} data={ordertlist || []} />
                )}
            </section>
        </>
    );
};

export default DashboardOrdersPage;