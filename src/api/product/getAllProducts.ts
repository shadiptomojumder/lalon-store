import { api } from "../api"


const GetAllProducts = async () => {
    try {
        const response = await api.get(`/product`);
        console.log("Response from GetAllProducts API:", response.data.data);
        
        return response.data.data
    } catch (error) {
        console.log("Error in GetAllProducts API:",error);
        throw error;
    }
}

export default GetAllProducts;