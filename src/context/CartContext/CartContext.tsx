"use client";
import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface CartContextProviderProps {
    children: ReactNode;
}

interface CartItem {
    id: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateCartItem: (id: string, updatedItem: CartItem) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateCartItem: () => {},
    clearCart: () => {},
});

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
    // const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    //     if (typeof window !== 'undefined') {
    //         const storedCart = localStorage.getItem('cartItems');
    //         return storedCart ? JSON.parse(storedCart) : [];
    //       }
    //       return [];
    // });

    // useEffect(() => {
    //     //console.log("Saving cart items to localStorage:", cartItems);
    //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // }, [cartItems]);


    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cartItems');
            if (storedCart) {
                setCartItems(JSON.parse(storedCart));
            }
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems, isMounted]);

    const addToCart = (item: CartItem) => {
        setCartItems([...cartItems, item]);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    const removeFromCart = (id: string) => {
        // Logic to remove item from cart
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const updateCartItem = (id: string, updatedItem: CartItem) => {
        setCartItems(
            cartItems.map((item) => (item.id === id ? updatedItem : item))
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateCartItem,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
