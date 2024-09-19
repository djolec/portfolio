import { useState } from "react";
import { projects } from "../../constants/projects";
import { LayoutToggleProvider } from "../../ui/LayoutToggle";
import Project from "../../ui/Project";
import Modal from "../../ui/Modal";

const WorkProjects = () => {
  const [layout, setLayout] = useState("list");
  const [modal, setModal] = useState({ active: false, index: 0 });

  const handleMouseEnter = () => {
    setModal((prev) => ({ ...prev, active: true }));
  };
  const handleMouseLeave = () => {
    setModal((prev) => ({ ...prev, active: false }));
  };

  return (
    <div className="relative z-20 mx-auto max-w-[150rem] pb-20 text-hero">
      <div className="hidden gap-6 px-4 pb-8 sm:px-paddingX md:flex 2xl:pb-16 tablet:hidden">
        <LayoutToggleProvider layout={layout} setLayout={setLayout} name="list">
          <LayoutToggleProvider.Lines />
        </LayoutToggleProvider>

        <LayoutToggleProvider
          layout={layout}
          setLayout={setLayout}
          name="thumbnails"
        >
          <LayoutToggleProvider.Squares />
        </LayoutToggleProvider>
      </div>

      <div
        className={`flex flex-col gap-14 bg-white px-4 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 md:px-paddingX06 tablet:grid tablet:grid-cols-2 tablet:gap-8 tablet:gap-y-16 ${layout === "list" ? "px-4 md:flex md:flex-col md:gap-0" : "md:grid md:grid-cols-2 md:gap-8 md:gap-y-16"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
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
  );
};

export default WorkProjects;
