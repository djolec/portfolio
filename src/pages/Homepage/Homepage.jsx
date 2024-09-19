import usePageScroll from "../../hooks/usePageScroll";
import CurvedDiv from "./CurvedDiv";
import FooterContact from "../../ui/FooterContact";
import Header from "../../ui/Header";
import Hero from "./Hero";
import HomepageAbout from "./HomepageAbout";
import HomepageProjects from "./HomepageProjects";
import PageTransition from "../../ui/PageTransition";
// import Button from "../../ui/Button";

const Homepage = () => {
  const { scrollYProgress } = usePageScroll();

  return (
    <PageTransition>
      <Header textColor="text-white" />
      <Hero scrollYProgress={scrollYProgress} />
      {/* <div className="relative h-[30vh] bg-red-500">
        <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
          <Button to="/about">About</Button>
        </div>
      </div>
      <div className="relative h-[30vh] bg-yellow-500"></div> */}
      <HomepageAbout scrollYProgress={scrollYProgress} />
      <HomepageProjects />
      <CurvedDiv />
      <FooterContact />
    </PageTransition>
  );
};

export default Homepage;
