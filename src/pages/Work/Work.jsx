import Header from "../../ui/Header";
import PageTransition from "../../ui/PageTransition";
import FooterContact from "../../ui/FooterContact";
import CurvedDiv from "../Homepage/CurvedDiv";
import WorkHeading from "./WorkHeading";
import WorkProjects from "./WorkProjects";

const Work = () => {
  return (
    <PageTransition>
      <Header />
      <WorkHeading />
      <WorkProjects />
      <CurvedDiv />
      <FooterContact />
    </PageTransition>
  );
};

export default Work;
