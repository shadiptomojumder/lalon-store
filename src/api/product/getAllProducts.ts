import { api } from "../api"
type QueryKey = [string, string , string];


const GetAllProducts = async ({queryKey}:{queryKey: QueryKey}) => {
    try {
        //console.log("queryKey in getAllproduct API:",queryKey);
        
        const [, query,sortBy] = queryKey;

        //console.log("query",sortBy);
        



        const response = await api.get(`/product?${query ? `search=${query}&&`:``}${sortBy ? `sortBy=${sortBy}`:``}`);
        //console.log("Response from GetAllProducts API:", response.data.data);
        
        return response.data.data
    } catch (error) {
        console.log("Error in GetAllProducts API:",error);
        throw error;
    }
}

export default GetAllProducts;