import { Toaster } from "@/components/ui/sonner";
import AuthContextProvider from "@/context/AuthContext/AuthContext";
import TanstackProvider from "@/TanstackProvider/TanstackProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { CartContextProvider } from "@/context/CartContext/CartContext";
import CartForMobile from "./components/CartForMobile/CartForMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lalon Store",
    description: "Grossstores",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TanstackProvider>
                    <AuthContextProvider>
                        <CartContextProvider>
                        <div className="sticky top-0 z-[500]">
                            <Header />
                            <Navbar />
                        </div>
                        {/* <NavigationMenuDemo/> */}
                        <Suspense
                            fallback={<div className="w-dvh h-dvh"></div>}
                        >
                            {children}
                        </Suspense>
                        <Footer />
                        <CartForMobile></CartForMobile>
                        <Toaster richColors />
                        </CartContextProvider>
                    </AuthContextProvider>
                </TanstackProvider>
            </body>
        </html>
    );
}
