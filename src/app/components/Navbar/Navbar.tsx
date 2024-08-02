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
    // {
    //     id: 2,
    //     categoryName: "Food",
    //     link: "/food",
    //     subCategoryList: [
    //         {
    //             id: 1,
    //             subCategoryName: "Breakfast",
    //             link: "/food",
    //             subCategoryList: [
    //                 {
    //                     id: 1,
    //                     subCategoryName: "Cereal",
    //                     link: "/food",
    //                 },
    //                 {
    //                     id: 2,
    //                     subCategoryName: "Bread",
    //                     link: "/food",
    //                 },
    //                 {
    //                     id: 3,
    //                     subCategoryName: "Milk",
    //                     link: "/food",
    //                 },
    //                 {
    //                     id: 4,
    //                     subCategoryName: "Eggs",
    //                     link: "/food",
    //                 },
    //                 {
    //                     id: 5,
    //                     subCategoryName: "Yogurt",
    //                     link: "/food",
    //                 },
    //                 {
    //                     id: 6,
    //                     subCategoryName: "Nuts",
    //                     link: "/food",
    //                 },
    //                 {
    //                     id: 7,
    //                     subCategoryName: "Chocolate",
    //                     link: "/food",
    //                 },
    //                 {
    //                     id: 8,
    //                     subCategoryName: "Bakery",
    //                     link: "/food",
    //                 },
    //             ],
    //         },
    //         {
    //             id: 2,
    //             subCategoryName: "Lunch",
    //             link: "/food",
    //         },
    //         {
    //             id: 3,
    //             subCategoryName: "Dinner",
    //             link: "/food",
    //         },
    //         {
    //             id: 4,
    //             subCategoryName: "Dessert",
    //             link: "/food",
    //         },
    //         {
    //             id: 5,
    //             subCategoryName: "Drinks",
    //             link: "/food",
    //         },
    //         {
    //             id: 6,
    //             subCategoryName: "Snacks",
    //             link: "/food",
    //         },
    //     ],
    // },
    // {
    //     id: 3,
    //     categoryName: "Personal Care",
    //     link: "/personal-care",
    //     subCategoryList: [
    //         {
    //             id: 1,
    //             subCategoryName: "Shampoo",
    //             link: "/personal-care",
    //         },
    //         {
    //             id: 2,
    //             subCategoryName: "Conditioner",
    //             link: "/personal-care",
    //         },
    //         {
    //             id: 3,
    //             subCategoryName: "Deodorant",
    //             link: "/personal-care",
    //         },
    //         {
    //             id: 4,
    //             subCategoryName: "Body Wash",
    //             link: "/personal-care",
    //         },
    //         {
    //             id: 5,
    //             subCategoryName: "Face Wash",
    //             link: "/personal-care",
    //         },
    //         {
    //             id: 6,
    //             subCategoryName: "Toothpaste",
    //             link: "/personal-care",
    //         },
    //     ],
    // },
    // {
    //     id: 4,
    //     categoryName: "Stationery & Office",
    //     link: "/stationery-office",
    //     subCategoryList: [
    //         {
    //             id: 1,
    //             subCategoryName: "Pens",
    //             link: "/stationery-office",
    //         },
    //         {
    //             id: 2,
    //             subCategoryName: "Notebooks",
    //             link: "/stationery-office",
    //         },
    //         {
    //             id: 3,
    //             subCategoryName: "Staplers",
    //             link: "/stationery-office",
    //         },
    //         {
    //             id: 4,
    //             subCategoryName: "Pencils",
    //             link: "/stationery-office",
    //         },
    //         {
    //             id: 5,
    //             subCategoryName: "Markers",
    //             link: "/stationery-office",
    //         },
    //         {
    //             id: 6,
    //             subCategoryName: "Staples",
    //             link: "/stationery-office",
    //         },
    //     ],
    // },
];

const handleHover = (event: any) => {
    console.log("Hover item", event);
};

const Navbar = () => {
    return (
        <nav className="bg-[#3da641] py-2">
            <main className="container">
                <section className="flex items-center gap-5 justify-center">
                    {CategoryList.map((category) => {
                        return (
                            <div
                                key={category.id}
                                
                                className="group relative"
                            >
                                <div className="flex items-center gap-1">
                                    <h2 className="text-lg font-semibold text-[#040D12] text-nowrap">
                                        {category.categoryName}
                                    </h2>
                                    <ChevronDown
                                        size={25}
                                        className="group-hover:rotate-180 text-[#040D12] transition-all duration-300"
                                    />
                                </div>
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
