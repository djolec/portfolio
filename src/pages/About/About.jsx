import PageTransition from "../../ui/PageTransition";
import AboutInfo from "./AboutInfo";
import Header from "../../ui/Header";
import SlidingSkills from "./SlidingSkills";
import CurvedDiv from "../Homepage/CurvedDiv";
import FooterContact from "../../ui/FooterContact";
import AboutHeading from "./AboutHeading";
import { motion } from "framer-motion";
import { pageAnimation } from "../../constants/pageAnim";

const About = () => {
  return (
    <PageTransition>
      <Header />
      {/* <motion.div {...pageAnimation}> */}
      <AboutHeading />
      <AboutInfo />
      <SlidingSkills />
      <CurvedDiv />
      <FooterContact />
      {/* </motion.div> */}
    </PageTransition>
  );
};

export default About;
