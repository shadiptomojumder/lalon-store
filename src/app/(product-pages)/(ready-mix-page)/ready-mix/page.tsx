"use client";
import GetAllProducts from "@/api/product/getAllProducts";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import ProductCardLoading from "@/app/components/ProductCardLoading/ProductCardLoading";
import { useQuery } from "@tanstack/react-query";
import {
    useParams,
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";
import { useState } from "react";

const ReadyMixPage = () => {
    const [sortByText, setSortByText] = useState("");
    const pathname = usePathname();
    const params = useParams();
    const searchPrams = useSearchParams();
    const sortBy = searchPrams.get("sortBy") || "";
    const router = useRouter();

    // console.log("searchPrams is", searchPrams);
    // console.log("sortBy is", sortBy);

    const {
        isLoading,
        data: productList,
        error,
    } = useQuery({
        queryKey: ["productlist", "", sortBy],
        queryFn: GetAllProducts,
    });
    console.log("productList:", productList);

    return (
        <section className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {isLoading ? (
                <>
                    {Array.from({ length: 10 }, (_, index) => (
                        <ProductCardLoading key={index}></ProductCardLoading>
                    ))}
                </>
            ) : (
                <>
                    {productList &&
                        productList.length > 0 &&
                        productList
                            .filter(
                                (product: any) =>
                                    product.productCategory === "readymix"
                            )
                            .map((product: any) => (
                                <ProductCard
                                    key={product._id}
                                    productData={product}
                                />
                            ))}
                </>
            )}
        </section>
    );
};

export default ReadyMixPage;
