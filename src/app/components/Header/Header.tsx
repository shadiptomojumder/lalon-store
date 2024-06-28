import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { CircleUser, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white py-3">
            <section className="container flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-extrabold dark:text-primary text-nowrap">
                        Lalon Store
                    </h2>
                </div>
                <div className="w-[40%]">
                    <Input type="text" placeholder="Search any item" className="p-2 focus:border-[#2B580C]"/>
                </div>
                <div className="flex items-center gap-2">
                <ShoppingCart size={30} />
                    <DropdownMenu>
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
                    </DropdownMenu>
                </div>
            </section>
        </header>
    );
};

export default Header;
