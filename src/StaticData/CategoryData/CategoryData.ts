import FreshFruit from "../../../public/category/FreshFruit.png"
import Beverages from "../../../public/category/Beverages.png"
import Snacks from "../../../public/category/Snacks.png"
import MeatFish from "../../../public/category/Meat&Fish.png"
export const GetCategory = async () => {
    // Simulate a list of 10 dummy categories
    const categoryList = [
        {
            id: 1,
            categoryName: "Fresh Fruit",
            categoryImage: FreshFruit,
            link: "/category/fresh-fruit",
        },
        {
            id: 2,
            categoryName: "Meat & Fish",
            categoryImage: MeatFish,
            link: "/category/meat-fish",
        },
        {
            id: 3,
            categoryName: "Snacks",
            categoryImage: Snacks,
            link: "/category/snacks",
        },
        {
            id: 4,
            categoryName: "Beverages",
            categoryImage: Beverages,
            link: "/category/beverages",
        },
        {
            id: 5,
            categoryName: "Sports",
            categoryImage: "https://via.placeholder.com/150",
            link: "https://example.com/sports",
        },
        {
            id: 6,
            categoryName: "Beauty",
            categoryImage: "https://via.placeholder.com/150",
            link: "https://example.com/beauty",
        },
        {
            id: 7,
            categoryName: "Automotive",
            categoryImage: "https://via.placeholder.com/150",
            link: "https://example.com/automotive",
        },
        {
            id: 8,
            categoryName: "Home",
            categoryImage: "https://via.placeholder.com/150",
            link: "https://example.com/home",
        },
        {
            id: 9,
            categoryName: "Garden",
            categoryImage: "https://via.placeholder.com/150",
            link: "https://example.com/garden",
        },
        {
            id: 10,
            categoryName: "Toys",
            categoryImage: "https://via.placeholder.com/150",
            link: "https://example.com/toys",
        },
    ];

    return categoryList;
};