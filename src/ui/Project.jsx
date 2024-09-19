import { Link } from "react-router-dom";

const Project = ({ index, title, setModal, color, src, link, layout }) => {
  const handleMouseEnter = () => {
    setModal({ active: true, index });
  };
  const handleMouseLeave = () => {
    setModal((prev) => ({ ...prev, active: false }));
  };

  return (
    <Link
      to={`/work/${link}`}
      className={`group items-center justify-between transition-all duration-500 tablet:block tablet:border-b-0 tablet:px-0 tablet:py-0 tablet:first-of-type:border-t-0 ${layout === "list" ? "md:border-b-borderLight md:first-of-type:border-t-borderLight md:flex md:border-b md:px-paddingX04 md:py-10 md:first-of-type:border-t" : "md:block"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`px-6 py-12 tablet:block ${layout === "list" ? "md:hidden" : "md:block"}`}
        style={{ backgroundColor: color }}
      >
        <img
          className="h-auto w-full"
          src={`/images/${src}`}
          height="500"
          width="800"
        />
      </div>

      <h2
        className={`border-b-borderLight tablet:border-b-borderLight border-b py-3 text-5xl font-medium transition-all duration-500 sm:text-[1.2em] tablet:border-b tablet:py-3 tablet:group-hover:-translate-x-0 sm:portrait:text-[1.7em] ${layout === "list" ? "md:border-b-0 md:py-0 md:group-hover:-translate-x-8 md:group-hover:opacity-60" : "md:border-b md:py-3 md:group-hover:-translate-x-0"}`}
      >
        {title}
      </h2>

      <h4
        className={`pt-3 text-lg transition-all duration-500 sm:text-[0.4em] tablet:pt-3 tablet:group-hover:-translate-x-0 sm:portrait:text-lg ${layout === "list" ? "md:pt-0 md:group-hover:translate-x-8 md:group-hover:opacity-60" : "pt-3 md:group-hover:translate-x-0"}`}
      >
        Design & Development
      </h4>
    </Link>
  );
};

export default Project;
