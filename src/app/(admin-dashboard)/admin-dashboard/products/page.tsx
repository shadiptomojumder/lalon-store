"use client";
import GetAllProducts from "@/api/product/getAllProducts";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../../DashboardComponents/ProductTable/DataTable ";
import { columns } from "../../DashboardComponents/ProductTable/columns";
import { ProductTableLoading } from "../../DashboardComponents/ProductTableLoading/ProductTableLoading";

const Categories = () => {
    const GetCategory = async () => {
        // Simulate a list of 10 dummy categories
        const categoryList = [
            {
                id: 1,
                categoryName: "Food",
                categoryImage: "https://via.placeholder.com/150",
                link: "https://example.com/food",
            },
            {
                id: 2,
                categoryName: "Electronics",
                categoryImage: "https://via.placeholder.com/150",
                link: "https://example.com/electronics",
            },
            {
                id: 3,
                categoryName: "Books",
                categoryImage: "https://via.placeholder.com/150",
                link: "https://example.com/books",
            },
            {
                id: 4,
                categoryName: "Clothing",
                categoryImage: "https://via.placeholder.com/150",
                link: "https://example.com/clothing",
            },
            {
                id: 5,
                categoryName: "Sports",
                categoryImage: "https://via.placeholder.com/150",
                link: "https://example.com/sports",
            },
            {
                id: 6,
                categoryName: "Beauty",
                categoryImage: "https://via.placeholder.com/150",
                link: "https://example.com/beauty",
            },
            {
                id: 7,
                categoryName: "Automotive",
                categoryImage: "https://via.placeholder.com/150",
                link: "https://example.com/automotive",
            },
            {
                id: 8,
                categoryName: "Home",
                categoryImage: "https://via.placeholder.com/150",
                link: "https://example.com/home",
            },
            {
                id: 9,
                categoryName: "Garden",
                categoryImage: "https://via.placeholder.com/150",
                link: "https://example.com/garden",
            },
            {
                id: 10,
                categoryName: "Toys",
                categoryImage: "https://via.placeholder.com/150",
                link: "https://example.com/toys",
            },
        ];

        return categoryList;
    };

    const { isLoading, data: productlist } = useQuery({
        queryKey: ["productlist", "",""],
        queryFn: GetAllProducts,
    });

    console.log("productlist is :", productlist);

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

export default Categories;
