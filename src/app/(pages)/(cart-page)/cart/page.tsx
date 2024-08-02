"use client"
import ProductCartCard from '@/app/components/ProductCartCard/ProductCartCard';
import { useCart } from '@/hooks/useCart';
import React from 'react';

const CartPage = () => {
    const { cartItems, addToCart, removeFromCart, updateCartItem, clearCart } =
    useCart();

    console.log("cartItems is:",cartItems);
    





    return (
        <main>
            <section className='container'>
                <h2 className='text-xl font-bold text-center'>My Shopping Cart</h2>
                <div className='border-2 rounded-md p-5'>
                    <div>
                        {
                            cartItems && cartItems.length > 0 && cartItems.map((cartItem) => {
                                return (
                                    <div key={cartItem.id}>
                                        <ProductCartCard
                                            cartItem={cartItem}
                                            addToCart={addToCart}
                                            removeFromCart={removeFromCart}
                                            updateCartItem={updateCartItem}
                                            clearCart={clearCart}
                                        />
                                    </div>
                                );
                            })
                        }
                        {/* <ProductCartCard></ProductCartCard> */}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CartPage;