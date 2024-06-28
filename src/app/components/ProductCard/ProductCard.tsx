import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductData {
    _id?: string;
    productName: string;
    productPrice: string;
    productQuantity: string;
    review?: string;
}

const ProductCard = ({ productData }: { productData: ProductData }) => {
    const { productName, productPrice, productQuantity } = productData;
    return (
        <section className="bg-white p-4 min-w-[250px] flex flex-col justify-between border shadow hover:shadow-[#00B307] hover:border-[#20B526] rounded-md cursor-pointer">
            <div>
                <Image
                    src={
                        "https://chaldn.com/_mpimage/green-apple-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D119065&q=best&v=1&m=400&webp=1"
                    }
                    alt="product"
                    width={500}
                    height={500}
                    className="w-[150px] h-[150px] mx-auto"
                />
            </div>
            <section className="flex flex-col justify-between h-full">
                <h2 className="text-[#1A1A1A] text-center capitalize text-base font-medium">
                    {productName}
                </h2>
                <div className="space-y-2 text-center">
                    <p className="text-[#1A1A1A] text-base font-medium">
                        {productQuantity}
                    </p>
                    <p className="text-[#1A1A1A] text-base font-bold">
                        ৳ {productPrice}
                    </p>
                    <button className="text-white py-1 flex items-center justify-center gap-1 rounded-full w-full bg-[#00B307]">
                        <ShoppingCart size={20} className=" text-[#FFFFFF]" />
                        Add to cart
                    </button>
                </div>
            </section>
        </section>
    );
};

export default ProductCard;
