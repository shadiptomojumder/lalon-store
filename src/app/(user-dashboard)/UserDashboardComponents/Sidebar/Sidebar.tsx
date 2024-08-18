"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import { ArrowLeftToLine, LayoutList, UserCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiArrowToRight } from "react-icons/bi";

const QuickLinks = [
    {
        id: 1,
        title: "Profile",
        link: "/user-dashboard/profile",
        icon: <UserCog size={25} />,
    },
    {
        id: 2,
        title: "Orders",
        link: "/user-dashboard/orders",
        icon: <LayoutList size={25} />,
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    const [showSideBar, setShowSideBar] = useState<boolean>(false);
    // console.log("showSideBar",showSideBar);
    const { user, setUser, userLoading } = useAuth();

    const sideBarRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
            // Do something when clicking outside of authDropdownRef
            // console.log("Clicked outside!");
            setShowSideBar(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Here logic of when menu is open the scrollbar willbe disable
    useEffect(() => {
        if (showSideBar) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";
        }
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, [showSideBar]);

    return (
        <>
            {/* This is for big screens */}
            <main className="bg-white min-w-[288px] h-[80dvh] rounded-lg hidden lg:block border">
                <div className="pt-5 pb-3 mx-auto text-center flex justify-center">
                    <Label
                        htmlFor="avataro"
                        className="flex justify-center sm:justify-start w-fit border border-primary p-1 rounded-full bg-white shadow-lg"
                    >
                        {user && user?.avatar ? (
                            <Image
                                src={user?.avatar}
                                alt="Uploades Image"
                                height={120}
                                width={120}
                                className="min-w-[120px] h-[120px] rounded-full object-cover object-center"
                            />
                        ) : (
                            <>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={120}
                                    height={120}
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        fill="none"
                                        stroke="#00b306"
                                        strokeLinecap="round"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeDasharray="2 4"
                                            strokeDashoffset={6}
                                            d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
                                        >
                                            <animate
                                                attributeName="stroke-dashoffset"
                                                dur="0.6s"
                                                repeatCount="indefinite"
                                                values="6;0"
                                            ></animate>
                                        </path>
                                        <path
                                            strokeDasharray={30}
                                            strokeDashoffset={30}
                                            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
                                        >
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                begin="0.1s"
                                                dur="0.3s"
                                                values="30;0"
                                            ></animate>
                                        </path>
                                        <path
                                            strokeDasharray={10}
                                            strokeDashoffset={10}
                                            d="M12 16v-7.5"
                                        >
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                begin="0.5s"
                                                dur="0.2s"
                                                values="10;0"
                                            ></animate>
                                        </path>
                                        <path
                                            strokeDasharray={6}
                                            strokeDashoffset={6}
                                            d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"
                                        >
                                            <animate
                                                fill="freeze"
                                                attributeName="stroke-dashoffset"
                                                begin="0.7s"
                                                dur="0.2s"
                                                values="6;0"
                                            ></animate>
                                        </path>
                                    </g>
                                </svg>
                            </>
                        )}
                    </Label>
                    <Input
                        id="avataro"
                        type="file"
                        className="appearance-none hidden"
                    />
                </div>

                <h2 className="text-xl font-semibold text-center pb-3 mb-3 border-b-2 border-primary">
                    {user?.fullname}
                </h2>

                {/* All the Links */}
                {userLoading ? (
                    <section className="space-y-2">
                        {Array.from({ length: 6 }, (_, index) => (
                            <Skeleton
                                key={index}
                                className="w-full h-[35px] rounded-none bg-gray-300"
                            />
                        ))}
                    </section>
                ) : (
                    <>
                        <section className="space-y-2">
                            {QuickLinks.map((item) => {
                                const isActive = pathname === item.link;
                                return (
                                    <Link
                                        href={`${item.link}`}
                                        key={item.id}
                                        className="block"
                                    >
                                        <div
                                            className={
                                                isActive
                                                    ? "py-2 px-4 cursor-pointer flex items-center gap-2 bg-[#edf2ee] border-l-2 border-primary hover:text-primary transition-all ease-in-out duration-300"
                                                    : "py-2 px-4 cursor-pointer bg-white group flex items-center gap-2 hover:bg-[#edf2ee] border-l-2 border-transparent hover:border-primary hover:text-primary transition-all ease-in-out duration-300"
                                            }
                                        >
                                            {item.icon && (
                                                <div
                                                    className={`flex items-center gap-2 group-hover:text-primary transition-all ease-in-out duration-300 ${isActive ? "text-primary" : "text-[#040D12]"}`}
                                                >
                                                    {item.icon}
                                                </div>
                                            )}
                                            <h2
                                                className={
                                                    isActive
                                                        ? "text-primary font-semibold capitalize transition-all ease-in-out duration-300"
                                                        : "text-[#040D12] font-semibold group-hover:text-primary capitalize transition-all ease-in-out duration-300"
                                                }
                                            >
                                                {item.title}
                                            </h2>
                                        </div>
                                    </Link>
                                );
                            })}

                            {/* {user && user?.role && user?.role === "super-admin" && (
                <Link href={`/dashboard/dashboard-users`} className="block">
                  <div
                    className={
                      pathname === "/dashboard/dashboard-users"
                        ? "py-2 px-4 cursor-pointer bg-[#092635] border border-primary boxglow rounded-md transition-all ease-in-out duration-300"
                        : "py-2 px-4 cursor-pointer bg-transparent hover:bg-[#092635] border border-gray-200 rounded-md hover:border-primary hover:text-primary transition-all ease-in-out duration-300"
                    }
                  >
                    <h2
                      className={
                        pathname === "/dashboard/dashboard-users"
                          ? "text-primary font-semibold transition-all ease-in-out duration-300"
                          : "text-gray-200 font-semibold transition-all ease-in-out duration-300"
                      }
                    >
                      Users
                    </h2>
                  </div>
                </Link>
              )} */}
                        </section>
                    </>
                )}
            </main>

            {/* This is for small screens */}
            <main
                ref={sideBarRef}
                className={`px-0 py-10 transition-all lg:hidden md:min-w-[288px] min-w-[150px] flex flex-col justify-between h-[100dvh] z-[500] absolute bg-white border-r-2 ${
                    showSideBar ? "top-[0%] left-0" : "top-0 -left-[95%]"
                }`}
            >
                {/* All the Links */}

                {userLoading ? (
                    <section className="space-y-3">
                        {Array.from({ length: 6 }, (_, index) => (
                            <Skeleton
                                key={index}
                                className="w-full h-[35px] rounded-none bg-gray-300"
                            />
                        ))}
                    </section>
                ) : (
                    <>
                        <section className="space-y-2">
                            {QuickLinks.map((item) => {
                                const isActive = pathname === item.link;
                                return (
                                    <Link
                                        onClick={() => setShowSideBar(false)}
                                        href={`${item.link}`}
                                        key={item.id}
                                        className="block"
                                    >
                                        <div
                                            className={
                                                isActive
                                                    ? "py-2 px-4 cursor-pointer flex items-center gap-2 bg-[#edf2ee] border-l-2 border-primary hover:text-primary transition-all ease-in-out duration-300"
                                                    : "py-2 px-4 cursor-pointer bg-white group flex items-center gap-2 hover:bg-[#edf2ee] border-l-2 border-transparent hover:border-primary hover:text-primary transition-all ease-in-out duration-300"
                                            }
                                        >
                                            {item.icon && (
                                                <div
                                                    className={`flex items-center gap-2 group-hover:text-primary transition-all ease-in-out duration-300 ${isActive ? "text-primary" : "text-[#040D12]"}`}
                                                >
                                                    {item.icon}
                                                </div>
                                            )}
                                            <h2
                                                className={
                                                    isActive
                                                        ? "text-primary font-semibold capitalize transition-all ease-in-out duration-300"
                                                        : "text-[#040D12] font-semibold group-hover:text-primary capitalize transition-all ease-in-out duration-300"
                                                }
                                            >
                                                {item.title}
                                            </h2>
                                        </div>
                                    </Link>
                                );
                            })}

                            {/* {user && user?.role && user?.role === "super-admin" && (
                <Link href={`/dashboard/dashboard-users`} className="block">
                  <div
                    className={
                      pathname === "/dashboard/dashboard-users"
                        ? "py-2 px-4 cursor-pointer bg-[#092635] border border-primary boxglow rounded-md transition-all ease-in-out duration-300"
                        : "py-2 px-4 cursor-pointer bg-transparent hover:bg-[#092635] border border-gray-200 rounded-md hover:border-primary hover:text-primary transition-all ease-in-out duration-300"
                    }
                  >
                    <h2
                      className={
                        pathname === "/dashboard/dashboard-users"
                          ? "text-primary font-semibold transition-all ease-in-out duration-300"
                          : "text-gray-200 font-semibold transition-all ease-in-out duration-300"
                      }
                    >
                      Users
                    </h2>
                  </div>
                </Link>
              )} */}
                        </section>
                    </>
                )}

                {/* sidebar close button */}
                <div
                    onClick={() => setShowSideBar(false)}
                    className="mx-2 md:mb-20 mb-10"
                >
                    <Button className="hover:bg-primary bg-[#b7e7c1] w-full gap-1 font-semibold text-sm shadow-md">
                        {/* <PanelLeftClose className="text-gray-950"/> */}
                        <ArrowLeftToLine className="text-gray-950" />
                        Close
                    </Button>
                </div>
            </main>

            <div
                className={`w-dvw h-dvh lg:hidden transition-all z-[400] backdrop-blur-sm bg-black bg-opacity-5 fixed left-0 top-0 ${
                    showSideBar ? "opacity-100" : "hidden"
                }`}
            ></div>

            <div
                onClick={() => setShowSideBar(!showSideBar)}
                className={`w-7 h-14 bg-[#b7e7c1] transition-all duration-300 flex items-center z-[480] justify-center rounded-r-lg lg:hidden fixed left-0 top-1/2 -translate-y-1/2 ${
                    showSideBar ? "scale-0" : "scale-100"
                }`}
            >
                <BiArrowToRight className="text-2xl text-gray-950 font-bold" />
            </div>
        </>
    );
};

export default Sidebar;
