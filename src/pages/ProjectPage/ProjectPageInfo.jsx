import Magnetic from "../../ui/Magnetic";

const ProjectPageInfo = ({ project }) => {
  return (
    <div className="mx-auto flex max-w-[150rem] flex-col gap-4 px-4 pt-48 sm:px-paddingX sm:pt-[30vh] sm:portrait:px-12 sm:portrait:pt-[20vh]">
      <div className="flex items-end justify-between gap-4 text-[3rem] sm:text-headingClamp">
        <h1 className="font-medium leading-none">{project.title}</h1>

        <div className="flex items-center justify-start gap-2 sm:gap-8">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <Magnetic xOffset={1.5} yOffset={1.5}>
              <svg
                className="h-auto w-10 fill-black transition-colors duration-300 hover:fill-darkBlue sm:w-iconWidth"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
            </Magnetic>
          </a>

          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Magnetic xOffset={1.5} yOffset={1.5}>
              <svg
                className="h-auto w-10 fill-black transition-colors duration-300 hover:fill-darkBlue sm:w-iconWidth"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                />
              </svg>
            </Magnetic>
          </a>
        </div>
      </div>

      <div className="h-[1px] w-full bg-borderLight" />

      <div className="flex flex-col gap-12 sm:flex-row sm:text-projectInfo">
        <div className="flex w-full flex-col gap-4">
          <h4 className="text-2xl text-black sm:text-[1.3em]">Description</h4>
          <p className="text-base leading-snug text-[#292727] sm:text-[1em]">
            {project.description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          <h4 className="text-2xl text-black sm:text-[1.3em]">Technologies</h4>

          <ul className="list-inside list-disc">
            {project.technologies.map((tech, index) => (
              <li
                key={index}
                className="text-base leading-snug text-[#636363] sm:text-[1em]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageInfo;
