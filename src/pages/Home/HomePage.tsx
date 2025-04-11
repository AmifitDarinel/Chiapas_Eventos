import CountBtn from "@/components/ui/count-btn";
import ReactSVG from "@/assets/images/react.svg";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import SocialBar from "@/components/Organisms/social-bar";
import Header from "@/components/Organisms/header";
import MainSection from "@/components/Organisms/main-slider";
import Advantages from "@/components/Organisms/advantages";
import Goals from "@/components/Organisms/goals";
import Gallery from "@/components/Organisms/gallery";
import Partners from "@/components/Organisms/Partners";
import Footer from "@/components/Organisms/footer";
function HomePage() {
  return (
    <>
      <SocialBar/>
      <Header/>
      <MainSection/>
      <Advantages/>
      <Goals/>
      <Gallery/>
      <Partners/>
      <Footer/>
    </>
  );
}

export default HomePage;
