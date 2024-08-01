"use client"
import { useEffect } from "react";
import HeroSection from "../homepage-sections/HeroSection/HeroSection";
import PopularCategorieSection from "../homepage-sections/PopularCategorieSection/PopularCategorieSection";
import PopularProductSection from "../homepage-sections/PopularProductSection/PopularProductSection";
import ShocaseSection from "../homepage-sections/ShocaseSection/ShocaseSection";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const HomePage = () => {
    const { user, setUser, userLoading } = useAuth();
    const router = useRouter();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const userParam = urlParams.get('user');
        if (userParam) {
            const user = JSON.parse(decodeURIComponent(userParam));
            console.log("USER by params:",user);
            
            
            // Optionally, you can store the user in localStorage or context for persistent state
            localStorage.setItem("userData", JSON.stringify(user));
            setUser(user)
            router.push("https://lalon-store.vercel.app");
        }
    }, [router,setUser]);
    return (
        <main className="bg-white">
            <section className="container">
                <HeroSection />
                <ShocaseSection/>
                <PopularCategorieSection/>
                <PopularProductSection/>
            </section>
        </main>
    );
};

export default HomePage;
