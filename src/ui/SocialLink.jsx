import Magnetic from "./Magnetic";

const SocialLink = ({ text, href, xOffset = 1.5, yOffset = 1.2 }) => {
  return (
    <Magnetic xOffset={xOffset} yOffset={yOffset} width="w-fit">
      <a
        className="relative block text-white no-underline after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:scale-0 after:bg-white after:transition-transform after:duration-300 after:sm:hover:scale-100"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </Magnetic>
  );
};

export default SocialLink;
