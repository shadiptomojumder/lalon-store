"use client";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const CategoryList = [
    {
        id: 1,
        categoryName: "Popular",
        link: "/",
    },
    {
        id: 2,
        categoryName: "Food",
        link: "/food",
        subCategoryList: [
            {
                id: 1,
                subCategoryName: "Breakfast",
                link: "/food",
                subCategoryList: [
                    {
                        id: 1,
                        subCategoryName: "Cereal",
                        link: "/food",
                    },
                    {
                        id: 2,
                        subCategoryName: "Bread",
                        link: "/food",
                    },
                    {
                        id: 3,
                        subCategoryName: "Milk",
                        link: "/food",
                    },
                    {
                        id: 4,
                        subCategoryName: "Eggs",
                        link: "/food",
                    },
                    {
                        id: 5,
                        subCategoryName: "Yogurt",
                        link: "/food",
                    },
                    {
                        id: 6,
                        subCategoryName: "Nuts",
                        link: "/food",
                    },
                    {
                        id: 7,
                        subCategoryName: "Chocolate",
                        link: "/food",
                    },
                    {
                        id: 8,
                        subCategoryName: "Bakery",
                        link: "/food",
                    },
                ],
            },
            {
                id: 2,
                subCategoryName: "Lunch",
                link: "/food",
            },
            {
                id: 3,
                subCategoryName: "Dinner",
                link: "/food",
            },
            {
                id: 4,
                subCategoryName: "Dessert",
                link: "/food",
            },
            {
                id: 5,
                subCategoryName: "Drinks",
                link: "/food",
            },
            {
                id: 6,
                subCategoryName: "Snacks",
                link: "/food",
            },
        ],
    },
    {
        id: 3,
        categoryName: "Personal Care",
        link: "/personal-care",
        subCategoryList: [
            {
                id: 1,
                subCategoryName: "Shampoo",
                link: "/personal-care",
            },
            {
                id: 2,
                subCategoryName: "Conditioner",
                link: "/personal-care",
            },
            {
                id: 3,
                subCategoryName: "Deodorant",
                link: "/personal-care",
            },
            {
                id: 4,
                subCategoryName: "Body Wash",
                link: "/personal-care",
            },
            {
                id: 5,
                subCategoryName: "Face Wash",
                link: "/personal-care",
            },
            {
                id: 6,
                subCategoryName: "Toothpaste",
                link: "/personal-care",
            },
        ],
    },
    {
        id: 4,
        categoryName: "Stationery & Office",
        link: "/stationery-office",
        subCategoryList: [
            {
                id: 1,
                subCategoryName: "Pens",
                link: "/stationery-office",
            },
            {
                id: 2,
                subCategoryName: "Notebooks",
                link: "/stationery-office",
            },
            {
                id: 3,
                subCategoryName: "Staplers",
                link: "/stationery-office",
            },
            {
                id: 4,
                subCategoryName: "Pencils",
                link: "/stationery-office",
            },
            {
                id: 5,
                subCategoryName: "Markers",
                link: "/stationery-office",
            },
            {
                id: 6,
                subCategoryName: "Staples",
                link: "/stationery-office",
            },
        ],
    },
];

const handleHover = (event: any) => {
    console.log("Hover item", event);
};

const Navbar = () => {
    return (
        <nav className="bg-[#F2F2F2] py-2">
            <main className="container">
                <section className="flex items-center gap-5 justify-center">
                    {CategoryList.map((category) => {
                        return (
                            <div
                                key={category.id}
                                onMouseOver={(e) => handleHover(e)}
                                className="group relative"
                            >
                                <div className="flex items-center gap-1">
                                    <h2 className="text-lg font-semibold text-primary text-nowrap">
                                        {category.categoryName}
                                    </h2>
                                    <ChevronDown
                                        size={25}
                                        className="group-hover:rotate-180 transition-all duration-300"
                                    />
                                </div>

                                {category &&
                                    category.subCategoryList &&
                                    category.subCategoryList.length > 0 && (
                                        <div className="bg-red-500 py-2 px-4 group/item hidden group-hover:flex flex-col gap-5 absolute top-[100%] left-1/2 -translate-x-1/2 transition-all duration-1000">
                                            {category.subCategoryList.map(
                                                (subCategory) => {
                                                    return (
                                                        <>
                                                            <Link
                                                                href={"#"}
                                                                key={
                                                                    subCategory.id
                                                                }
                                                            >
                                                                {
                                                                    subCategory.subCategoryName
                                                                }
                                                            </Link>
                                                            <div className="bg-green-500 py-2 px-4 hidden group-hover/item:flex flex-col gap-5 absolute top-[100%] left-1/2 -translate-x-1/2 transition-all duration-1000">
                                                                {subCategory && subCategory.subCategoryList && subCategory.subCategoryList.length > 0 && subCategory.subCategoryList.map(
                                                                    (
                                                                        subCategory
                                                                    ) => {
                                                                        return (
                                                                            <Link
                                                                                href={
                                                                                    "#"
                                                                                }
                                                                                key={
                                                                                    subCategory.id
                                                                                }
                                                                            >
                                                                                {
                                                                                    subCategory.subCategoryName
                                                                                }
                                                                            </Link>
                                                                        );
                                                                    }
                                                                )}
                                                            </div>
                                                        </>
                                                    );
                                                }
                                            )}
                                        </div>
                                    )}
                            </div>
                        );
                    })}
                </section>
            </main>
        </nav>
    );
};

export default Navbar;

const NavigationMenu = () => {
    return (
        <ul className="flex gap-10">
            {CategoryList.map((category) => (
                <li key={category.id}>
                    <NavigationMenuLink href={category.link}>
                        {category.categoryName}
                    </NavigationMenuLink>
                </li>
            ))}
        </ul>
    );
};
