import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";

import Image from "next/image";

const PopularCategorieSection = () => {
    return (
        <main className="mt-20 mb-10">
            <section className="flex items-center justify-between my-4">
                <h2 className="text-2xl text-[#1A1A1A] font-semibold">
                    Popular Categories
                </h2>
                <div className="flex items-center gap-3">
                    <p className="text-[#00B307] font-semibold">View all</p>
                    <ChevronRight className="text-[#00B307]"/>
                </div>
            </section>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent className="w-full">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/6 w-full"
                        >
                            <div className="p-1">
                                <Card className="hover:shadow-[#00B307] hover:border hover:border-[#00B307] transition-all duration-300 cursor-pointer group p-2">
                                    <CardContent className="flex items-center justify-center p-1">
                                        <section>
                                            <Image
                                                src={
                                                    "https://chaldn.com/_mpimage/fruits-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23769&q=low&v=1&m=400&webp=1"
                                                }
                                                alt="food"
                                                width={200}
                                                height={200}
                                                className="w-[150px] h-[150px]"
                                            />
                                            <p className="text-base capitalize group-hover:text-[#2C742F] text-center font-semibold">
                                                vegetable apple 
                                            </p>
                                        </section>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </main>
    );
};

export default PopularCategorieSection;
