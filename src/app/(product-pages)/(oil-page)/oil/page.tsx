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

const OilPage = () => {
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
    // console.log("productList:", productList);

    return (
        <section className="grid md:mt-5 mt-1 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:gap-5 md:gap-4 gap-3">
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
                                    product.productCategory === "oil"
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

export default OilPage;
