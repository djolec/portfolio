import { socials } from "../constants/socials";
import SocialLink from "./SocialLink";
import useLocalTime from "../hooks/useLocalTime";

const Socials = ({ position }) => {
  const localTime = useLocalTime();

  return (
    <div
      className={`text-socialsText z-10 mx-auto flex w-full max-w-[150rem] px-4 pb-4 sm:flex-row sm:justify-between sm:px-16 portrait:flex-col-reverse sm:portrait:px-paddingX sm:portrait:pb-10 sm:portrait:text-[2.2vw] ${position === "absolute" ? "absolute bottom-0" : ""}`}
    >
      <div className="">
        <p className="mb-2 text-[0.9em] text-white/60">LOCAL TIME</p>

        <p className="text-white">{localTime} (GMT+1)</p>
      </div>

      <div className="my-5 h-[1px] bg-gray-500/40 landscape:hidden" />

      <div>
        <p className="mb-2 text-[0.9em] text-white/60">SOCIALS</p>

        <div className="flex flex-row gap-6">
          {socials.map((social) => {
            return (
              <SocialLink
                text={social.title}
                key={social.title}
                href={social.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Socials;
