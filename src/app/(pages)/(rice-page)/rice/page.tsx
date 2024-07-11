"use client";
import GetAllProducts from "@/api/product/getAllProducts";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";

const RicePage = () => {
    const {
        isLoading,
        data: productList,
        error,
    } = useQuery({
        queryKey: ["productlist", "product"],
        queryFn: GetAllProducts,
    });
    console.log("productList:", productList);

    return (
        <main>
            <section className="container bg-red-500">
                {/* <h2>This is Spices Page</h2> */}
                <section className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {productList &&
                        productList.length > 0 &&
                        productList
                            .filter(
                                (product: any) =>
                                    product.productCategory === "rice"
                            )
                            .map((product: any) => (
                                <ProductCard
                                    key={product._id}
                                    productData={product}
                                />
                            ))}
                </section>
            </section>
        </main>
    );
};

export default RicePage;

