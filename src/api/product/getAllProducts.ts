import { api } from "../api"
type QueryKey = [string, string];


const GetAllProducts = async ({queryKey}:{queryKey: QueryKey}) => {
    try {
        console.log("queryKey",queryKey);
        
        const [, query] = queryKey;

        console.log("query",query);
        



        const response = await api.get(`/product?search=${query}`);
        console.log("Response from GetAllProducts API:", response.data.data);
        
        return response.data.data
    } catch (error) {
        console.log("Error in GetAllProducts API:",error);
        throw error;
    }
}

export default GetAllProducts;