"use client";
import GetSingleProduct from "@/api/product/getSingleProduct";
import { useQuery } from "@tanstack/react-query";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

interface CartItem {
    id: string;
    quantity: number;
    price?: number;
}

interface ProductCartCardProps {
    cartItem: CartItem;
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateCartItem: (id: string, updatedItem: CartItem) => void;
    clearCart: () => void;
}

const ProductCartCard: React.FC<ProductCartCardProps> = ({
    cartItem,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
}) => {
    const { id: productId, quantity } = cartItem;

    const { data: product } = useQuery({
        queryKey: ["product", productId],
        queryFn: GetSingleProduct,
    });
    console.log("the product is:", product);
    console.log("the product is:", cartItem);

    const handleIncrement = () => {
        const cartItem = cartItems.find((item) => item.id === product?._id);
        if (cartItem) {
            updateCartItem(product._id, {
                ...cartItem,
                quantity: cartItem.quantity + 1,
            });
        }
    };

    const handleDecrement = () => {
        const cartItem = cartItems.find((item) => item.id === product._id);
        if (cartItem && cartItem.quantity > 1) {
            updateCartItem(product._id, {
                ...cartItem,
                quantity: cartItem.quantity - 1,
            });
        } else if (cartItem && cartItem.quantity === 1) {
            removeFromCart(product._id);
        }
    };

    return (
        <div className="bg-white flex items-start border-b-2 border-slate-400 py-2">
            <Image
                src={product?.productImage}
                width={70}
                height={70}
                alt="product image"
            />
            <section className="w-full flex flex-col gap-1">
                <h2 className="text-sm font-medium capitalize">
                    {product?.productName}
                </h2>
                <div className="flex items-start justify-between gap-5 w-full">
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-nowrap">
                            ৳
                            {cartItem &&
                                cartItem.price &&
                                cartItem?.price * cartItem.quantity}
                        </p>
                        <div className="flex items-center gap-[2px]">
                            <p className="text-sm font-medium text-slate-500">
                                ৳{product?.productPrice}
                            </p>
                            <p className="text-xs font-medium text-slate-400">|</p>
                            <p className="text-sm font-medium text-slate-500">piece</p>
                        </div>
                    </div>
                    <div className="text-white bg-slate-100 rounded-full flex items-center justify-around shadow-lg gap-1 border-2 border-gray-600 w-fit">
                        <button
                            onClick={handleDecrement}
                            className="p-[1px] text-gray-800 border-r-2 px-2 border-gray-600"
                        >
                            <Minus />
                        </button>
                        <p className="text-base text-gray-900 font-semibold w-7 flex items-center justify-center">
                            {quantity}
                        </p>
                        <button
                            onClick={handleIncrement}
                            className="p-[1px] text-gray-800 border-l-2 px-2 border-gray-600"
                        >
                            <Plus />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductCartCard;
