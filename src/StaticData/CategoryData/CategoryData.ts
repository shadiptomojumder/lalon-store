import Spices from "../../../public/images/spices.webp"
import salt_sugar from "../../../public/images/salt-sugar.webp"
import Rice from "../../../public/images/rice.webp"
import Dal from "../../../public/images/dal-or-lentil.webp"
import Readymix from "../../../public/images/ready-mix.webp"
import shemai_suji from "../../../public/images/shemai-suji.webp"
import Oil from "../../../public/images/oil.webp"






export const GetCategory = async () => {
    // Simulate a list of 10 dummy categories
    const categoryList = [
        {
            id: 1,
            categoryName: "spices",
            categoryTitle: "Spices",
            categoryImage: Spices,
            link: "/category/fresh-fruit",
        },
        {
            id: 2,
            categoryName: "salt_sugar",
            categoryTitle: "Salt & Sugar",
            categoryImage: salt_sugar,
            link: "/category/meat-fish",
        },
        {
            id: 3,
            categoryName: "rice",
            categoryTitle: "Rice",
            categoryImage: Rice,
            link: "/category/snacks",
        },
        {
            id: 4,
            categoryName: "dal",
            categoryTitle: "Dal",
            categoryImage: Dal,
            link: "/category/beverages",
        },
        {
            id: 5,
            categoryName: "readymix",
            categoryTitle: "Ready Mix",
            categoryImage: Readymix,
            link: "https://example.com/garden",
        },
        {
            id: 6,
            categoryName: "shemai_suji",
            categoryTitle: "Shemai & Suji",
            categoryImage: shemai_suji,
            link: "https://example.com/garden",
        },
        {
            id: 7,
            categoryName: "oil",
            categoryTitle: "Oil",
            categoryImage: Oil,
            link: "https://example.com/garden",
        },
    ];

    return categoryList;
};