import PageTransition from "../../ui/PageTransition";
import AboutInfo from "./AboutInfo";
import Header from "../../ui/Header";
import SlidingSkills from "./SlidingSkills";
import CurvedDiv from "../Homepage/CurvedDiv";
import FooterContact from "../../ui/FooterContact";
import AboutHeading from "./AboutHeading";

const About = () => {
  return (
    <PageTransition>
      <Header />
      <AboutHeading />
      <AboutInfo />
      <SlidingSkills />
      <CurvedDiv />
      <FooterContact />
    </PageTransition>
  );
};

export default About;
