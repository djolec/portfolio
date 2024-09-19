import { useState } from "react";
import { projects } from "../../constants/projects";
import Project from "../../ui/Project";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

const HomepageProjects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const layout = "list";

  return (
    <div className="relative mx-auto w-full max-w-[150rem] bg-white pb-8 text-hero">
      <h3 className="mb-6 px-4 text-black sm:px-paddingX sm:text-[0.7em]">
        Recent projects
      </h3>

      <div className="bg-white px-4 pb-8 md:px-paddingX06">
        <div className="flex flex-col gap-14 sm:grid sm:grid-cols-2 sm:gap-6 sm:gap-y-12 md:flex md:flex-col md:gap-0 tablet:grid tablet:grid-cols-2 tablet:gap-8 tablet:gap-y-16">
          {projects.map((project, index) => {
            const title = project.title;
            const src = project.src;
            const color = project.color;
            const link = project.link;
            return (
              <Project
                index={index}
                link={link}
                title={title}
                src={src}
                color={color}
                setModal={setModal}
                key={title}
                layout={layout}
              />
            );
          })}

          <Modal modal={modal} projects={projects} layout={layout} />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button to="/work" type="oval">
          More work
        </Button>
      </div>
    </div>
  );
};

export default HomepageProjects;
