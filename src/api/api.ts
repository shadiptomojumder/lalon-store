import axios from "axios";
const BaseURL = "http://localhost:5000/api"

export const api = axios.create({
    baseURL: BaseURL,
    timeout: 10000,
    headers: { "X-Custom-Header": "foobar" },
    withCredentials: true,
});

// https://dentist-backend-phee.onrender.com
// https://dentist-backend-one.vercel.app
// http://localhost:5000
// https://lalon-store-backend-production.up.railway.app

// Add a request interceptor
// api.interceptors.request.use(
//   function (config) {
//     // Do something before the request is sent
//     const token = localStorage.getItem('authToken'); // Retrieve auth token from localStorage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (error) {
//     // Handle the error
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
api.interceptors.response.use(
    function (response) {
        // Do something with the response data
        console.log("Response:", response);
        return response;
    },
    async function (error) {
        console.log("The error line 40 is:", error);

        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
              const storedUser = localStorage.getItem('userData');
              let parsedUser
              if (storedUser !== null) {
                parsedUser = JSON.parse(storedUser);
                // Now you can use parsedUser safely
            } else {
                // Handle the case when userData is not found in localStorage
            } 
              
                const refreshToken = parsedUser?.refreshToken;
                console.log("Refreshing token from localestorage:", refreshToken);
                
                const response = await axios.post(
                    `${BaseURL}/users/refresh-token`,{refreshToken}
                );

                const accessToken = response?.data?.data?.accessToken
                console.log("The Rsponse line 56 is:",response.data.data.accessToken);
                localStorage.setItem('accessToken', accessToken);
                

                

                // Retry the original request with the new token
                //originalRequest.headers.Authorization = `Bearer ${token}`;
                return axios(originalRequest);
            } catch (error) {
                throw error;
            }
        }
        return Promise.reject(error);
    }
);
