import TanstackProvider from "@/TanstackProvider/TanstackProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

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
                    <Header />
                    <Navbar />
                    {/* <NavigationMenuDemo/> */}
                    {children}
                    <Footer />
                </TanstackProvider>
            </body>
        </html>
    );
}
