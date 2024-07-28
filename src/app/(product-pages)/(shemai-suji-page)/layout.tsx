import ProductFilterBar from "@/app/components/ProductFilterBar/ProductFilterBar";
import ProductPageSidebar from "@/app/components/ProductPageSidebar/ProductPageSidebar";
import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import Image from "next/image";
import React from "react";
import ShemaiSujiBanner from "../../../../public/banners/Shemai&Suji.png"

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
            <div className="text-center flex justify-center py-10 container">
                <Image src={ShemaiSujiBanner} alt="ShemaiSujiBanner"/>
            </div>
            <section className="overflow-auto min-h-[80dvh] container bg-white">
                <ProductFilterBar/>
                <div className="flex lg:gap-5">
                    {/* <ProductPageSidebar/> */}
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </section>
        </main>
    );
}
