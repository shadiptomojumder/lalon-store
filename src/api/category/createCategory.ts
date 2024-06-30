import { api } from "../api"


const CreateCategory = async (data:any) => {
    console.log("The Data in CreateCategory api is:",data)
    
    try {
        const response = await api.post(`/category`, data);
        console.log("response in CreateCategory.ts file: ", response);
        
        return response.data
    } catch (error) {
        console.log("The Error in Appointment api is:",error);
        
        throw error
    }
}

export default CreateCategory;