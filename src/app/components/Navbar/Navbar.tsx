"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { AlignLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import BabyCareIcon from "../../../../public/icons/babyCare.webp";
import BeautyHelthIcon from "../../../../public/icons/beautyHealth.webp";
import FoodIcon from "../../../../public/icons/food.webp";

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
        <nav className="bg-[#34ad38] py-2 hidden md:block">
            <main className="container flex items-center justify-between relative">
                <section className="flex items-center gap-2">
                    <AlignLeft size={30} className="text-white" />
                    <p className="text-base font-semibold text-white capitalize">
                        Shop by category
                    </p>
                </section>

                <section className="bg-slate-400 p-2 rounded-sm absolute top-[100%] left-0 space-y-2 w-[310px]">
                    {/* {
                        CategoryList.map((category,index) => {
                            return (
                                <NavigationMenu key={index} categoryData={category}/>
                            )
                        })
                    } */}

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Image
                                src={FoodIcon}
                                alt="FoodIcon"
                                width={25}
                                height={25}
                                placeholder="blur"
                            />
                            <p className="text-base font-semibold capitalize">
                                Foood
                            </p>
                        </div>
                        <ChevronRight />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Image
                                src={BabyCareIcon}
                                alt="BabyCareIcon"
                                width={25}
                                height={25}
                                placeholder="blur"
                            />
                            <p className="text-base font-semibold capitalize">
                                Baby Care
                            </p>
                        </div>
                        <ChevronRight />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Image
                                src={BeautyHelthIcon}
                                alt="BeautyHelthIcon"
                                width={25}
                                height={25}
                                placeholder="blur"
                            />
                            <p className="text-base font-semibold capitalize">
                                Beauty & Health
                            </p>
                        </div>
                        <ChevronRight />
                    </div>
                    
                </section>
            </main>
        </nav>
    );
};

export default Navbar;

const NavigationMenu = ({ categoryData }: any) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
                <Image
                    src={BabyCareIcon}
                    alt="BabyCareIcon"
                    width={25}
                    height={25}
                    placeholder="blur"
                />
                <p className="text-base font-semibold">
                    {categoryData?.categoryName}
                </p>
            </div>
            <ChevronRight />
        </div>
    );
};
