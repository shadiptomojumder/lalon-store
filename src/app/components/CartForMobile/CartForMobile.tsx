"use client";
import { useCart } from "@/hooks/useCart";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CartForMobile = () => {
    const { cartItems, addToCart, removeFromCart, updateCartItem, clearCart } =
        useCart();

    const pathname = usePathname();
    console.log("The pathname is: ", pathname);

    return (
        <>
            {/* <section className="bg-white sm:hidden shadow-[0px_-5px_14px_-0px_rgba(0,0,0,0.3)] h-12 w-full fixed bottom-0 left-0 rounded-t-xl px-2 py-1">
                <div className="h-[50px] w-[50px] bg-primary rounded-full flex items-center justify-center absolute -top-3 left-1/2 -translate-x-1/2">
                    <ShoppingBasket size={40} className="text-gray-900" />
                </div>
            </section> */}

            {}

            <Link href={"/cart"}>
                <div
                    className={`h-[50px] w-[50px] shadow-[0px_0px_8px_5px_rgba(0,0,0,0.3)] bg-primary rounded-full flex items-center justify-center fixed bottom-5 right-5 transition-all duration-200 ${pathname == "/cart" ? " scale-0" : " scale-100"}`}
                >
                    <ShoppingBasket size={40} className="text-gray-900" />
                    {cartItems && cartItems.length > 0 && (
                        <p className="text-primary font-bold absolute -top-1 -right-1 rounded-full h-[20px] w-[20px] bg-slate-200 flex justify-center items-center">
                            {cartItems.length}
                        </p>
                    )}
                </div>
            </Link>
        </>
    );
};

export default CartForMobile;

// box-shadow: 0px -20px 11px -3px rgba(0,0,0,0.1);
// box-shadow: 0px -11px 14px 0px rgba(0,0,0,0.1);
