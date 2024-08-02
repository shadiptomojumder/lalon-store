"use client"
import GetSingleProduct from "@/api/product/getSingleProduct";
import { useQuery } from "@tanstack/react-query";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

interface CartItem {
    id: string;
    quantity: number;
}

interface ProductCartCardProps {
    cartItem: CartItem;
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateCartItem: (id: string, updatedItem: CartItem) => void;
    clearCart: () => void;
}

const ProductCartCard: React.FC<ProductCartCardProps> = ({ cartItem, addToCart, removeFromCart, updateCartItem, clearCart }) => {
console.log("cartItem",cartItem);

    const {id:productId , quantity} = cartItem

    const { data: product } = useQuery({
        queryKey: ["product", productId],
        queryFn: GetSingleProduct,
    });
    console.log("the product is:", product);
    return (
        <div className="bg-white flex items-start border-b-2 border-slate-500 py-1">
            <Image
                src={
                    "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/665e84bb673683244576a95c_Shwapno-Premium-Chicken-Ball250gm_1_80.webp"
                }
                width={70}
                height={70}
                alt="product image"
            />
            <section className="w-full bg-violet-500 flex flex-col gap-1">
                <h2 className="text-sm font-medium">
                    {product?.productName}
                </h2>
                <div className="flex items-start justify-between gap-5 w-full">
                    <div>
                        <p className="text-sm font-bold text-nowrap">
                            $ 200 taka
                        </p>
                    </div>
                    <div className="text-white flex items-center justify-around shadow-lg gap-1 border-2 border-gray-600 w-fit bg-yellow-500">
                        <button className="p-[1px] text-gray-800 border-r-2 px-2 border-gray-600">
                            <Minus />
                        </button>
                        <p className="text-base text-gray-900 font-semibold px-2">
                            5
                        </p>
                        <button className="p-[1px] text-gray-800 border-l-2 px-2 border-gray-600">
                            <Plus />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCartCard;
