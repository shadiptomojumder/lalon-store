"use client";
import ProductCartCard from "@/app/components/ProductCartCard/ProductCartCard";
import { Label } from "@/components/ui/label";
import { useCart } from "@/hooks/useCart";

const CartPage = () => {
    const { cartItems, addToCart, removeFromCart, updateCartItem, clearCart } =
        useCart();

    console.log("cartItems is:", cartItems);

    return (
        <main>
            <section className="container">
                <h2 className="text-2xl font-bold text-center py-10">
                    My Shopping Cart
                </h2>
                <section className="">
                    <div className="border-2 rounded-md p-5">
                        {cartItems &&
                            cartItems.length > 0 &&
                            cartItems.map((cartItem) => {
                                return (
                                    <ProductCartCard
                                        key={cartItem.id}
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
                    <div className="border-2 rounded-md p-5 space-y-4">
                        <h2 className="text-xl font-bold">Cart Total</h2>
                        <div className="flex items-center justify-between gap-5 py-2 border-b-2 border-slate-400">
                            <Label className="text-sm font-semibold text-slate-500">
                                Subtotal:
                            </Label>
                            <p className="text-sm font-bold">$ 200 taka</p>
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
                                $ 200 taka
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
