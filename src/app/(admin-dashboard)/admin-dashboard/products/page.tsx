"use client";
import GetAllProducts from "@/api/product/getAllProducts";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../../DashboardComponents/ProductTable/DataTable ";
import { columns } from "../../DashboardComponents/ProductTable/columns";
import { ProductTableLoading } from "../../DashboardComponents/ProductTableLoading/ProductTableLoading";

const DashboardProductsPage = () => {


    const { isLoading, data: productlist } = useQuery({
        queryKey: ["productlist", "",""],
        queryFn: GetAllProducts,
    });

    //console.log("productlist is :", productlist);

    return (
        <main>
            <h2 className="text-lg font-semibold p-5">Product List</h2>
            <section>
                {isLoading ? (
                    <ProductTableLoading />
                ) : (
                    <DataTable columns={columns} data={productlist} />
                )}
            </section>
        </main>
    );
};

export default DashboardProductsPage;
