"use client";
import GetAllProducts from "@/api/product/getAllProducts";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../ProductTable/data-table";
import { columns } from "../ProductTable/columns";
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
                    <DataTable columns={columns} data={productlist || []} />
                )}
            </section>
        </>
    );
};

export default DashboardOrdersPage;