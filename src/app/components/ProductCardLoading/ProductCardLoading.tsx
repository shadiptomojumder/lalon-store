import { Skeleton } from "@/components/ui/skeleton";

const ProductCardLoading = () => {
    return (
        <section className="bg-white p-3 w-full min-w-[220px] flex flex-col justify-between group border shadow  rounded-md cursor-pointer transition-all duration-300">
            <Skeleton className="w-[150px] h-[150px] mx-auto bg-gray-300 mb-4" />

            <Skeleton className="w-full h-[25px] mx-auto bg-gray-300 mb-2" />
            <Skeleton className="w-full h-[20px] mx-auto bg-gray-300 mb-2" />

            <div className="flex justify-between items-center gap-3 w-[60%] mx-auto">
                <Skeleton className="w-full h-[15px] mx-auto bg-gray-300" />
                <Skeleton className="w-full h-[15px] mx-auto bg-gray-300" />
            </div>
            <Skeleton className="w-full h-[32px] rounded-full mx-auto bg-gray-300 mt-4" />
        </section>
    );
};

export default ProductCardLoading;
