import PageTransition from "../../ui/PageTransition";
import Button from "../../ui/Button";
import { useLocation } from "react-router-dom";
import { successFailedError } from "../../constants/successFailedError";
import Header from "../../ui/Header";
import Socials from "../../ui/Socials";

const SuccessFailedError = () => {
  const location = useLocation();
  const info = successFailedError.some(
    (item) => item.path === location.pathname,
  )
    ? successFailedError.filter((item) => item.path === location.pathname)[0]
    : successFailedError.filter((item) => item.path === "*")[0];

  console.log(info);

  return (
    <PageTransition>
      <Header textColor="text-white" />
      <div className="flex min-h-screen w-full flex-col bg-transparent">
        <video
          className="fixed -z-[2] h-full w-full object-cover"
          width="1920"
          height="1080"
          autoPlay
          muted
          loop
        >
          <source src="/images/forest.webm" type="video/webm" />
        </video>

        <div className="fixed -z-[1] h-full w-full bg-black/50" />

        <div className="flex flex-grow flex-col items-start justify-center gap-[7.5rem] px-4 sm:gap-[5.5rem] sm:px-paddingX">
          <div className="flex w-full flex-col justify-start text-headingClamp lg:flex-row lg:justify-between lg:gap-20">
            <div className="flex flex-col flex-wrap text-white md:flex-row md:gap-4 lg:flex-col lg:gap-0">
              <h1 className="text-[0.9em] leading-none">{info.text1}</h1>

              <h1 className="text-[0.9em] leading-none">{info.text2}</h1>
            </div>

            <p className="pt-[20px] text-2xl text-white sm:w-[23%] sm:text-[0.3em]">
              {info.helperText}
            </p>
          </div>

          <div className="relative h-[1px] w-full bg-gray-500/60">
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2">
              <Button
                to={info.linkTo}
                xOffsetInner={9}
                yOffsetInner={3}
                bgColor="bg-[#455CE9]"
              >
                {info.buttonText}
              </Button>
            </div>
          </div>
        </div>
        <Socials />
      </div>
    </PageTransition>
  );
};

export default SuccessFailedError;
