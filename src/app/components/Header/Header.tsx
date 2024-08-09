"use client";
import Logout from "@/api/user/logout";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { toast } from "sonner";

const Header = () => {
    const { user, setUser, userLoading } = useAuth();
    console.log("The User is ", user);
    console.log("The userLoading is ", userLoading);
    const { cartItems, addToCart, removeFromCart, updateCartItem, clearCart } =
        useCart();
    const pathname = usePathname();
    const router = useRouter();
    const userId = user?._id;

    // Logout Function
    const handleLogout = async () => {
        try {
            const response = await Logout({ userId });
            console.log("The Logout Response is", response);

            if (response.statusCode === 200) {
                toast.success("User successfully Logout");
                localStorage.removeItem("userData");
                setUser(null);
                document.cookie = "";
                router.push("/");
                router.refresh();
            }
        } catch (error) {
            console.log("The Error in Logout is:", error);
        }
    };

    const [searchText, setSearchText] = useState("");

    const handleSearch = (searchValue: string) => {
        setSearchText(searchValue);
        console.log("Search Text is:", searchText);
        router.push(`/search?q=${searchText}`);
    };

    return (
        <header className="bg-white py-2">
            <section className="container flex items-center justify-between">
                <Link href={"/"}>
                    <h2 className="md:text-2xl sm:text-xl text-lg font-extrabold dark:text-primary text-nowrap">
                        Lalon Store
                    </h2>
                </Link>
                <div className="w-[40%]">
                    <Input
                        type="text"
                        placeholder="Search your products"
                        className="p-2 focus-visible:ring-primary h-10"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3">
                    <Link href={"/cart"}>
                        <div className="relative hidden sm:block">
                            <MdOutlineShoppingCartCheckout
                                size={35}
                                className="text-[#040D12]"
                            />
                            {cartItems && cartItems.length > 0 && (
                                <p className="text-primary font-bold absolute -top-1 -right-2 rounded-full h-[20px] w-[20px] bg-slate-200 flex justify-center items-center">
                                    {cartItems.length}
                                </p>
                            )}
                        </div>
                    </Link>

                    {userLoading ? (
                        <Skeleton className="w-[60px] h-[60px] rounded-full bg-gray-500" />
                    ) : user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                {user && user?.avatar ? (
                                    <div className="border-2 boxglow border-primary rounded-full cursor-pointer">
                                        <Image
                                            src={user?.avatar as string}
                                            alt="Uploades Image"
                                            height={50}
                                            width={50}
                                            className="min-w-[40px] w-[40px] h-[40px] rounded-full object-cover object-center"
                                        />
                                    </div>
                                ) : (
                                    <div className="cursor-pointer flex items-center justify-center boxglow border-primary rounded-full">
                                        {/* <FaUser className="text-2xl text-black" /> */}
                                        <CircleUserRound
                                            size={35}
                                            className="text-[#040D12]"
                                        />
                                    </div>
                                )}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="z-[500]"
                            >
                                <DropdownMenuItem className="py-1 font-semibold">
                                    {user?.fullname}
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-xs text-[#040D12] focus:bg-transparent px-2 py-0 pb-1">
                                    {user?.role}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <Link
                                    href={`/user-dashboard/user-dashboard-profile`}
                                >
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                </Link>
                                {user &&
                                    user?.role &&
                                    (user?.role === "admin" ||
                                        user?.role === "super-admin") && (
                                        <Link href={`/admin-dashboard`}>
                                            <DropdownMenuItem>
                                                Admin Dashboard
                                            </DropdownMenuItem>
                                        </Link>
                                    )}
                                <Link href="/admin-dashboard">
                                    <DropdownMenuItem>
                                        Admin Dashboard
                                    </DropdownMenuItem>
                                </Link>

                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => handleLogout()}
                                >
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href="/login">
                            <Button
                                variant="default"
                                className="text-lg bg-primary hover:bg-accent-foreground boxglow text-white px-4 py-5 font-semibold rounded-full"
                            >
                                Login
                            </Button>
                        </Link>
                    )}

                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <CircleUser size={30} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="z-[500]">
                            <DropdownMenuItem className="py-1">
                                Liton Mojumder
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-xs text-muted-foreground px-2 py-0 pb-1">
                                admin
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <Link
                                href={`/user-dashboard/user-dashboard-profile`}
                            >
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                            </Link>
                            <Link href="/user-dashboard/user-dashboard-appointments">
                                <DropdownMenuItem>Appointment</DropdownMenuItem>
                            </Link>

                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}
                </div>
            </section>
        </header>
    );
};

export default Header;
