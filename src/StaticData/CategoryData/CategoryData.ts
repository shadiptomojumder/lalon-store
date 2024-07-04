import FreshFruit from "../../../public/category/FreshFruit.png"
import Beverages from "../../../public/category/Beverages.png"
import Snacks from "../../../public/category/Snacks.png"
import MeatFish from "../../../public/category/Meat&Fish.png"
export const GetCategory = async () => {
    // Simulate a list of 10 dummy categories
    const categoryList = [
        {
            id: 1,
            categoryName: "spices",
            categoryTitle: "Spices",
            categoryImage: FreshFruit,
            link: "/category/fresh-fruit",
        },
        {
            id: 2,
            categoryName: "salt_sugar",
            categoryTitle: "Salt & Sugar",
            categoryImage: MeatFish,
            link: "/category/meat-fish",
        },
        {
            id: 3,
            categoryName: "rice",
            categoryTitle: "Rice",
            categoryImage: Snacks,
            link: "/category/snacks",
        },
        {
            id: 4,
            categoryName: "dal",
            categoryTitle: "Dal",
            categoryImage: Beverages,
            link: "/category/beverages",
        },
        {
            id: 5,
            categoryName: "readymix",
            categoryTitle: "Ready Mix",
            categoryImage: "https://via.placeholder.com/150",
            link: "https://example.com/garden",
        },
        {
            id: 6,
            categoryName: "shemai_suji",
            categoryTitle: "Shemai & Suji",
            categoryImage: "https://via.placeholder.com/150",
            link: "https://example.com/garden",
        },
        {
            id: 7,
            categoryName: "oil",
            categoryTitle: "Oil",
            categoryImage: "https://via.placeholder.com/150",
            link: "https://example.com/garden",
        },
    ];

    return categoryList;
};