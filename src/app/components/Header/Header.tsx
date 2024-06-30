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
import { CircleUserRound, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

const Header = () => {
    const { user, setUser, userLoading } = useAuth();
    console.log("The User is ", user);
    
    const pathname = usePathname();
    const router = useRouter();

    // Logout Function
    const handleLogout = async () => {
        try {
            const response = await Logout();
            console.log("The Logout Response is", response);

            if (response.statusCode === 200) {
                toast.success("User successfully Logout");
                localStorage.removeItem("userData");
                setUser(null);
                router.push("/");
                router.refresh();
            }
        } catch (error) {
            console.log("The Error in Logout is:", error);
        }
    };
    return (
        <header className="bg-white py-2">
            <section className="container flex items-center justify-between">
                <Link href={"/"}>
                    <h2 className="text-2xl font-extrabold dark:text-primary text-nowrap">
                        Lalon Store
                    </h2>
                </Link>
                <div className="w-[40%]">
                    <Input
                        type="text"
                        placeholder="Search any item"
                        className="p-2 focus-visible:ring-primary h-10"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <ShoppingCart size={35} className="text-[#040D12]" />

                    {user && userLoading === false ? (
                        <>
                            {userLoading ? (
                                <Skeleton className="w-[60px] h-[60px] rounded-full bg-gray-500" />
                            ) : (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        {user && user?.avatar ? (
                                            <div className="border-2 boxglow border-primary rounded-full cursor-pointer">
                                                <Image
                                                    src={user?.avatar as string}
                                                    alt="Uploades Image"
                                                    height={50}
                                                    width={50}
                                                    className="min-w-[50px] h-[50px] rounded-full object-cover object-center"
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
                                            <DropdownMenuItem>
                                                Profile
                                            </DropdownMenuItem>
                                        </Link>
                                        {user &&
                                            user?.role &&
                                            (user?.role === "admin" ||
                                                user?.role ===
                                                    "super-admin") && (
                                                <Link href={`/dashboard`}>
                                                    <DropdownMenuItem>
                                                        Admin Dashboard
                                                    </DropdownMenuItem>
                                                </Link>
                                            )}
                                        <Link href="/user-dashboard/user-dashboard-appointments">
                                            <DropdownMenuItem>
                                                Appointment
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
                            )}
                        </>
                    ) : (
                        <>
                            {userLoading ? (
                                <Skeleton className="w-[70px] h-[40px] rounded-full bg-gray-500 z-50" />
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
                        </>
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
