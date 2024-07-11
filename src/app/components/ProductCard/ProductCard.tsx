import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductData {
    _id: string;
    productName: string;
    productPrice: string;
    productQuantity: string;
    productCategory: string;
    productDescription: string;
    productImage: string;
    productImageOne: string;
    productImageTwo: string;
    productImageThree: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const ProductCard = ({ productData }: { productData: ProductData }) => {
    const { productName, productPrice, productQuantity } = productData;
    return (
        <section className="bg-white p-3 w-full min-w-[220px] flex flex-col justify-between group border shadow hover:shadow-[#00B307] hover:border-[#20B526] rounded-md cursor-pointer transition-all duration-300">
            <div>
                <Image
                    src={
                        productData?.productImage
                    }
                    alt="product"
                    width={500}
                    height={500}
                    className="w-[150px] h-[150px] mx-auto"
                />
            </div>
            <section className="flex flex-col justify-between h-full">
                <h2 className="text-[#1A1A1A] text-center capitalize text-sm font-medium group-hover:underline transition-all duration-300">
                    {productName}
                </h2>
                <div className="space-y-2 text-center">
                    <p className="text-[#1A1A1A] text-base font-medium">
                        {productQuantity}
                    </p>
                    <p className="text-[#1A1A1A] text-base font-bold">
                        ৳ {productPrice}
                    </p>
                    <button className="text-white py-1 flex items-center justify-center shadow-lg gap-1 rounded-full w-full bg-[#00B307]">
                        <ShoppingCart size={20} className=" text-[#FFFFFF]" />
                        Add to cart
                    </button>
                </div>
            </section>
        </section>
    );
};

export default ProductCard;
