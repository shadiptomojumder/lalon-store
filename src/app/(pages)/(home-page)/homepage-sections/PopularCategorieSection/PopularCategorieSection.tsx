"use client";
import GetCategories from "@/api/category/getCategories";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { GetCategory } from "@/StaticData/CategoryData/CategoryData";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

// Define the type of the category object
type CategoryType = {
    _id: number;
    categoryName: string;
    categoryTitle: string;
    categoryImage: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

const PopularCategorieSection = () => {
    const { isLoading, data, error } = useQuery({
        queryKey: ["UserAppointments"],
        queryFn: GetCategory,
    });

    const CategoryList = data;
    console.log("data is", data);
    return (
        <main className="mt-20 mb-10">
            <section className="flex items-center justify-between my-4">
                <h2 className="text-2xl text-[#1A1A1A] font-semibold">
                    Popular Categories
                </h2>
                <div className="flex items-center gap-3">
                    <p className="text-[#00B307] font-semibold">View all</p>
                    <ChevronRight className="text-[#00B307]" />
                </div>
            </section>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent className="w-full h-full">
                    {CategoryList &&
                        CategoryList.length > 0 &&
                        CategoryList.map(
                            (category, index: number) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/2 lg:basis-1/6 w-full"
                                >
                                    <div className="p-1">
                                        <Card className="hover:shadow-[#00B307] hover:border hover:border-[#00B307] transition-all duration-300 cursor-pointer group h-[215px] p-1">
                                            <CardContent className="flex items-center justify-center h-full">
                                                <section className="flex flex-col justify-between h-full">
                                                    <div className="max-w-[190px] w-[190px] h-[130px] bg-white rounded-lg p-2 overflow-hidden flex justify-center items-center">
                                                    <Image
                                                        src={
                                                            category?.categoryImage
                                                        }
                                                        alt="food"
                                                        width={200}
                                                        height={200}
                                                        className="w-full object-cover rounded-lg"
                                                    />
                                                    </div>
                                                    <p className="text-base capitalize group-hover:text-[#2C742F] text-center font-semibold">
                                                        {category.categoryTitle}
                                                    </p>
                                                </section>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    );
};

export default PopularCategorieSection;
