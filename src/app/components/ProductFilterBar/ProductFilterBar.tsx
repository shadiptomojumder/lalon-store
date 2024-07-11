import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const ProductFilterBar = () => {
    return (
        <main>
            <section className="pb-3 flex items-center gap-4">
                <Button className="font-semibold text-white gap-1 md:hidden">
                    Filter
                    <SlidersHorizontal size={17} strokeWidth={3} />
                </Button>
                <div className="flex items-center gap-3">
                    <p className="font-semibold">Sort By :</p>
                    <Button variant={"outline"} className="border-gray-400">
                        Default
                    </Button>
                    <Button variant={"outline"} className="border-gray-400">
                        Best sale
                    </Button>
                    <Button variant={"outline"} className="border-gray-400">
                        Price asc
                    </Button>
                    <Button variant={"outline"} className="border-gray-400">
                        Price desc
                    </Button>
                    <Button variant={"outline"} className="border-gray-400">
                        Newest
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default ProductFilterBar;

{
    /* <div className="lg:column-2-main mb-0 flex w-full items-center justify-between bg-[#E6E6E6] py-2.5 text-left sm:px-2 lg:mb-3 lg:ml-auto lg:bg-white lg:px-2 lg:py-0">
    <button
        className="filter-button mr-2.5 inline-flex items-center rounded-r-md bg-main !bg-[url('/filter-icon.svg')] bg-left bg-no-repeat px-3 py-2.5 pl-7 text-[11px] font-medium leading-none text-white sm:static sm:ml-0 sm:translate-y-0 sm:rounded-md lg:hidden"
        type="button"
    >
        Filter
    </button>
    <div className="flex flex-wrap justify-start items-center relative z-10 sm:static">
        <strong className="text-xs lg:text-md font-medium leading-none text-black block w-full sm:w-auto mb-2 sm:mb-0 lg:mb-0 mr-2">
            Sort By :{" "}
        </strong>
        <div>
            <label className="cursor-pointer inline-block mb-0.5 sm:mb-0 mr-[5px] md:mr-2.5 last:mr-0 lg:mb-0">
                <span className="text-black text-[9px] md:text-sm !leading-none font-medium lg:font-normal bg-white inline-block rounded-[5px] lg:rounded-[3px] px-1.5 lg:px-2.5 py-2.5 md:py-2 shadow-button bg-yellow">
                    Default
                </span>
            </label>
            <label className="cursor-pointer inline-block mb-0.5 sm:mb-0 mr-[5px] md:mr-2.5 last:mr-0 lg:mb-0">
                <span className="text-black text-[9px] md:text-sm !leading-none font-medium lg:font-normal bg-white inline-block rounded-[5px] lg:rounded-[3px] px-1.5 lg:px-2.5 py-2.5 md:py-2 shadow-button">
                    Best sale
                </span>
            </label>
            <label className="cursor-pointer inline-block mb-0.5 sm:mb-0 mr-[5px] md:mr-2.5 last:mr-0 lg:mb-0">
                <span className="text-black text-[9px] md:text-sm !leading-none font-medium lg:font-normal bg-white inline-block rounded-[5px] lg:rounded-[3px] px-1.5 lg:px-2.5 py-2.5 md:py-2 shadow-button">
                    Price asc
                </span>
            </label>
            <label className="cursor-pointer inline-block mb-0.5 sm:mb-0 mr-[5px] md:mr-2.5 last:mr-0 lg:mb-0">
                <span className="text-black text-[9px] md:text-sm !leading-none font-medium lg:font-normal bg-white inline-block rounded-[5px] lg:rounded-[3px] px-1.5 lg:px-2.5 py-2.5 md:py-2 shadow-button">
                    Price desc
                </span>
            </label>
            <label className="cursor-pointer inline-block mb-0.5 sm:mb-0 mr-[5px] md:mr-2.5 last:mr-0 lg:mb-0">
                <span className="text-black text-[9px] md:text-sm !leading-none font-medium lg:font-normal bg-white inline-block rounded-[5px] lg:rounded-[3px] px-1.5 lg:px-2.5 py-2.5 md:py-2 shadow-button">
                    Newest
                </span>
            </label>
        </div>
    </div>
</div> */
}
