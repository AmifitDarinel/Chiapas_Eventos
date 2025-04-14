import { useEffect, useState } from "react";
import SocialBar from "@/components/Organisms/social-bar";
import Header from "@/components/Organisms/header";
import MainSection from "@/components/Organisms/main-slider";
import Advantages from "@/components/Organisms/advantages";
import Goals from "@/components/Organisms/goals";
import Gallery from "@/components/Organisms/gallery";
import Partners from "@/components/Organisms/Partners";
import Footer from "@/components/Organisms/footer";

function HomePage() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-[56px] ">
        <SocialBar visible={!showHeader} />
        <Header visible={showHeader} />
      </div>

      <MainSection />
      <Advantages />
      <Goals />
      <Gallery />
      <Partners />
      <Footer />
    </>
  );
}

export default HomePage;
