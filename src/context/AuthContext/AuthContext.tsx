"use client";
import Logout from "@/api/user/logout";
import { differenceInMilliseconds, formatDistanceToNow } from "date-fns";
import { jwtDecode } from "jwt-decode";
import React, {
    createContext,
    FC,
    ReactNode,
    useEffect,
    useState,
} from "react";
import { toast } from "sonner";

interface DecodedToken {
    _id: string;
    iat: string;
    exp: string;
}

const DecodeToken = (token: string): DecodedToken | null => {
    try {
        const decoded = jwtDecode<DecodedToken>(token);
        return decoded;
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
};

// Define the shape of the user object and the context value
interface User {
    [x: string]: ReactNode;
    id: string;
    fullname: string;
    email: string;
    // Add other fields as needed
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    userLoading: boolean;
}

// Create Context for User
export const AuthContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
    userLoading: true,
});

interface AuthContextProviderProps {
    children: ReactNode;
}

const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [userLoading, setUserLoading] = useState(true);

    // Load user data from localStorage on component mount
    useEffect(() => {
        const storedUser = localStorage.getItem("userData");
        console.log("The storedUser is:", storedUser);

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUserLoading(false);
                setUser(parsedUser);
            } catch (error) {
                console.error("Error parsing stored user data:", error);
                // Handle the error appropriately (clear the invalid data from localStorage)
                localStorage.removeItem("userData");
            }
        } else {
            setUserLoading(false);
        }
    }, []);

    // const AutoLogout = () => {
    //     const storedUser = localStorage.getItem("userData");
    //     if (storedUser) {
    //         try {
    //             const parsedUser = JSON.parse(storedUser);
    //             const TokenData: DecodedToken | null | undefined = DecodeToken(
    //                 parsedUser?.refreshToken
    //             );
    //             console.log("Token data from token is:", TokenData);

    //             const expireTimestamp = TokenData?.exp;
    //             const now = new Date();

    //             if (expireTimestamp !== undefined) {
    //                 const expireDate = new Date(Number(expireTimestamp) * 1000); // Convert to milliseconds
    //                 const remainingTimeInMilliseconds =
    //                     differenceInMilliseconds(expireDate, now);

    //                 // Format the remaining time in a human-readable format
    //                 const formattedRemainingTime = formatDistanceToNow(
    //                     expireDate,
    //                     {
    //                         addSuffix: true,
    //                     }
    //                 );

    //                 console.log(remainingTimeInMilliseconds); // Remaining time in milliseconds
    //                 console.log(formattedRemainingTime);

    //                 // Set a timeout to run the logout function after the remaining time
    //                 setTimeout( async () => {
    //                     const response = await Logout();
    //                     console.log("The Logout Response is", response);

    //                     if (response.statusCode === 200) {
    //                         toast.success("User successfully Logout");
    //                         localStorage.removeItem("userData");
    //                         localStorage.removeItem("accessToken");
    //                         localStorage.removeItem("refreshToken");
    //                         setUser(null);
    //                         document.cookie = "";
    //                     }
    //                 }, remainingTimeInMilliseconds);
    //             }
    //         } catch (error) {
    //             console.error("Error parsing stored user data:", error);
    //         }
    //     }
    // };

    (function() {
      const storedUser = localStorage.getItem("userData");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          const userId = parsedUser?._id
          const TokenData: DecodedToken | null | undefined = DecodeToken(
            parsedUser?.refreshToken
          );
          console.log("Token data from token is:", TokenData);
    
          const expireTimestamp = TokenData?.exp;
          const now = new Date();
    
          if (expireTimestamp !== undefined) {
            const expireDate = new Date(Number(expireTimestamp) * 1000); // Convert to milliseconds
            const remainingTimeInMilliseconds = differenceInMilliseconds(expireDate, now);
    
            // Format the remaining time in a human-readable format
            const formattedRemainingTime = formatDistanceToNow(
              expireDate,
              {
                addSuffix: true,
              }
            );
    
            console.log(remainingTimeInMilliseconds); // Remaining time in milliseconds
            console.log(formattedRemainingTime);
    
            // Set a timeout to run the logout function after the remaining time
            setTimeout(async () => {
              const response = await Logout({userId});
              console.log("The Logout Response is", response);
    
              if (response.statusCode === 200) {
                toast.success("User successfully Logout");
                localStorage.removeItem("userData");
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                setUser(null);
                document.cookie = "";
                window.location.href = "/login";
              }
            }, remainingTimeInMilliseconds);
          }
        } catch (error) {
          console.error("Error parsing stored user data:", error);
        }
      }
    })();




    return (
        <AuthContext.Provider value={{ user, setUser, userLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
