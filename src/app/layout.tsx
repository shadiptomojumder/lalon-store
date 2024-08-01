import AuthContextProvider from "@/context/AuthContext/AuthContext";
import TanstackProvider from "@/TanstackProvider/TanstackProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import { Suspense } from "react";

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
                <AuthContextProvider>
                    <TanstackProvider>
                        <div className="sticky top-0 z-[500]">
                            <Header />
                            <Navbar />
                        </div>
                        {/* <NavigationMenuDemo/> */}
                        <Suspense fallback={null}>
                        {children}
                        </Suspense>
                        <Footer />
                        <Toaster richColors/>
                    </TanstackProvider>
                </AuthContextProvider>
            </body>
        </html>
    );
}
