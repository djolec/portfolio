import PageTransition from "../../ui/PageTransition";
import Header from "../../ui/Header";
import ProjectPageInfo from "./ProjectPageInfo";
import ProjectPageFeatures from "./ProjectPageFeatures";
import Devices from "./Devices";
import NextProject from "./NextProject";
import CurvedDiv from "../Homepage/CurvedDiv";

import { useParams } from "react-router-dom";
import { projects } from "../../constants/projects";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.filter((project) => project.link === id)[0];
  const nextIndex =
    projects.length ===
    projects.findIndex((item) => item.link === project.link) + 1
      ? 0
      : projects.findIndex((item) => item.link === project.link) + 1;

  return (
    <PageTransition>
      <Header />
      <ProjectPageInfo project={project} />
      <Devices folder={project.link} />
      <ProjectPageFeatures project={project} />
      <CurvedDiv />
      <NextProject nextProject={projects[nextIndex]} />
    </PageTransition>
  );
};

export default ProjectPage;
