"use client";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductFilterBar = () => {
    const [sortByText, setSortByText] = useState("");
    const pathname = usePathname();
    const router = useRouter();
    const searchPrams = useSearchParams();
    const sortBy = searchPrams.get("sortBy");

    // console.log("pathname is", pathname);
    // console.log("sortByText is", sortByText);

    useEffect(() => {
        if (sortByText === "") {
            router.push(`${pathname}`);
        } else {
            router.push(`${pathname}?sortBy=${sortByText}`);
        }
    }, [sortByText, pathname, router]);

    return (
        <main>
            <section className="pb-3 flex items-center gap-4">
                <Button className="font-semibold text-white gap-1 md:hidden">
                    Filter
                    <SlidersHorizontal size={17} strokeWidth={3} />
                </Button>
                <div className="flex items-center gap-3">
                    <p className="font-semibold">Sort By :</p>
                    <Button
                        onClick={() => setSortByText("")}
                        variant={"outline"}
                        className={`border-gray-400 border-none shadow-md bg-slate-100 text-black hover:text-black ${sortByText=="" ? "bg-[#73dd76] hover:bg-[#73dd76] font-medium":""}`}
                    >
                        Default
                    </Button>
                    <Button variant={"outline"} className="border-none shadow-md bg-slate-100">
                        Best sale
                    </Button>
                    <Button
                        onClick={() => setSortByText("asc")}
                        variant={"outline"}
                        className={`border-gray-400 border-none shadow-md bg-slate-100 text-black hover:text-black ${sortByText=="asc" ? "bg-[#73dd76] hover:bg-[#73dd76] font-medium":""}`}
                    >
                        Price asc
                    </Button>
                    <Button
                        onClick={() => setSortByText("desc")}
                        variant={"outline"}
                        className={`border-gray-400 border-none shadow-md bg-slate-100 text-black hover:text-black ${sortByText=="desc" ? "bg-[#73dd76] hover:bg-[#73dd76] font-medium":""}`}
                    >
                        Price desc
                    </Button>
                    <Button
                        onClick={() => setSortByText("newest")}
                        variant={"outline"}
                        className={`border-gray-400 border-none shadow-md bg-slate-100 text-black hover:text-black ${sortByText=="newest" ? "bg-[#73dd76] hover:bg-[#73dd76] font-medium":""}`}
                    >
                        Newest
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default ProductFilterBar;

