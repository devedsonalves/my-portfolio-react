import { useEffect } from "react";
import Navbar from "@/components/navbar";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/hero-section";

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const navbar = document.querySelector("nav");
          const navbarHeight = navbar?.offsetHeight || 0;
          const offsetPosition = element.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default Index;
