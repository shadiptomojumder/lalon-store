"use client";
import GetAllProducts from "@/api/product/getAllProducts";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
    const [searchText, setSearchText] = useState("");
    const params = useParams();
    const searchPrams = useSearchParams();
    const router = useRouter();
    const search = searchPrams.get("q");

    console.log("params is", search);
    console.log("searchText is", searchText);
    console.log("searchPrams is", searchPrams);

    const {
        isLoading,
        data: productList,
        error,
    } = useQuery({
        queryKey: ["productlist", (searchText ?? "") || (search ?? "")],
        queryFn: GetAllProducts,
    });
    console.log("productList:", productList);

    const handleSearch = (searchValue: string) => {
        setSearchText(searchValue);
        router.push(`/search?q=${searchValue}`);
        
        console.log("searchText Text is:", searchText);
   
    };

    useEffect(() => {
        
    }, [searchText]); 
    

    return (
        <main className="mt-20 mb-10 container">
            <section className="flex items-center justify-between my-4">
                <h2 className="text-2xl text-[#1A1A1A] font-semibold">
                    Searched Products
                </h2>
                <div className="flex items-center gap-3">
                    <p className="text-[#00B307] font-semibold">View all</p>
                    <ChevronRight className="text-[#00B307]" />
                </div>
            </section>
            <div className="w-[60%] py-10">
                <Input
                    type="text"
                    placeholder="Search any item"
                    className="p-2 focus-visible:ring-primary h-10"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <p className="pt-5">{searchText}</p>
            </div>
            <section className="grid grid-cols-5 gap-8">
                {productList &&
                    productList.length > 0 &&
                    productList.map((product: any) => {
                        return (
                            <ProductCard
                                key={product._id}
                                productData={product}
                            />
                        );
                    })}
            </section>
        </main>
    );
};

export default SearchPage;
