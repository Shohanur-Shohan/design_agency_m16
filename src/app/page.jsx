import Brands from "@/components/Brands";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import Stats from "@/components/Stats";
import WorkLists from "@/components/WorkLists";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Brands/>
      <WorkLists/>
      <Stats/>
      {/* <FeaturedProjects/> */}
      <Featured/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}
