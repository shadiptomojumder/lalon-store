import { api } from "../api"


const GetCategories = async () => {
    try {
        const response = await api.get(`/category`);
        //console.log("response in GetCategories list file: ", response.data.data);
        
        return response.data
    } catch (error) {
        console.log("The Error in GetCategories list api is:",error);
        
        throw error
    }
}

export default GetCategories;