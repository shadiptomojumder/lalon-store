"use client";
import ProductCartCard from "@/app/components/ProductCartCard/ProductCartCard";
import { Label } from "@/components/ui/label";
import { useCart } from "@/hooks/useCart";

const CartPage = () => {
    const { cartItems, addToCart, removeFromCart, updateCartItem, clearCart } =
        useCart();

    console.log("cartItems is:", cartItems);

    const calculateTotal = () => {
        const total = cartItems.reduce((accumulator, item) => {
            const itemTotal = item.quantity * (item?.price ?? 0);
            return accumulator + itemTotal;
        }, 0);
        return total;
    };

    return (
        <main className="h-dvh">
            <section className="container">
                <h2 className="text-2xl font-bold text-center py-10">
                    My Shopping Cart
                </h2>
                <section className="grid grid-cols-12">
                    <div className="border-2 rounded-md p-5 col-span-8">
                        {cartItems &&
                            cartItems.length > 0 &&
                            cartItems.map((cartItem) => {
                                return (
                                    <ProductCartCard
                                        key={cartItem.id}
                                        cartItems={cartItems}
                                        cartItem={cartItem}
                                        addToCart={addToCart}
                                        removeFromCart={removeFromCart}
                                        updateCartItem={updateCartItem}
                                        clearCart={clearCart}
                                    />
                                );
                            })}
                        {/* <ProductCartCard></ProductCartCard> */}
                    </div>
                    <div className="col-span-1"></div>
                    <div className="border-2 rounded-md p-5 space-y-4 col-span-3">
                        <h2 className="text-xl font-bold">Cart Total</h2>
                        <div className="flex items-center justify-between gap-5 py-2 border-b-2 border-slate-400">
                            <Label className="text-sm font-semibold text-slate-500">
                                Subtotal:
                            </Label>
                            <p className="text-sm font-bold">
                                ৳{calculateTotal()}
                            </p>
                        </div>
                        <div className="flex items-center justify-between gap-5 py-2 border-b-2 border-slate-400">
                            <Label className="text-sm font-semibold text-slate-500">
                                Shipping:
                            </Label>
                            <p className="text-sm font-bold capitalize">Free</p>
                        </div>
                        <div className="flex items-center justify-between gap-5 py-2">
                            <Label className="text-sm font-semibold text-slate-500">
                                Total:
                            </Label>
                            <p className="text-sm font-bold capitalize">
                                ৳{calculateTotal()}
                            </p>
                        </div>
                        <button className="text-white text-sm font-semibold py-2 flex items-center justify-center shadow-lg rounded-full w-full bg-primary">
                            Confirm Order
                        </button>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default CartPage;
