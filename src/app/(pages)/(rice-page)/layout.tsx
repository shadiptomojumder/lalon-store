import ProductFilterBar from "@/app/components/ProductFilterBar/ProductFilterBar";
import ProductPageSidebar from "@/app/components/ProductPageSidebar/ProductPageSidebar";
import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import React from "react";

const NotoBengali = Noto_Sans_Bengali({
    weight: ["400", "500", "700"],
    subsets: ["bengali"],
});

export const metadata: Metadata = {
    title: "Lalon Store",
    description: "created by shadipto",
};

export default function ProductPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className={`bg-white py-10`}>
            <section className="overflow-auto min-h-[80dvh] container bg-orange-300">
                <ProductFilterBar/>
                <div className="flex lg:gap-5">
                    <ProductPageSidebar/>
                    <div className="w-full bg-gray-200">
                        {children}
                    </div>
                </div>
            </section>
        </main>
    );
}
