import LaptopText from "./LaptopText";

const ProjectPageFeatures = ({ project }) => {
  return (
    <div className="relative z-20">
      {project.features.map((feature, index) => {
        return (
          <LaptopText
            key={index}
            folder={project.link}
            text={feature.text}
            video={feature.video}
            direction={index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}
            color={index % 2 === 0 ? project.color : "white"}
            textColor={index % 2 === 0 ? "text-white" : "text-black"}
          />
        );
      })}
    </div>
  );
};

export default ProjectPageFeatures;
