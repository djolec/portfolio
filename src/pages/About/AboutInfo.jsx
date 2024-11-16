const AboutInfo = () => {
  const info = [
    {
      title: "Crafting Experiences",
      text: "As a passionate front-end developer, I enjoy creating seamless, intuitive, and visually appealing web applications. With expertise in JavaScript, React, and CSS frameworks like Tailwind, I focus on responsive, user-friendly designs that shine on any device. My goal is to transform ideas into interactive realities by blending creativity with functionality.",
    },
    {
      title: "Learning & Growing",
      text: "I’m driven by a constant curiosity for innovation, always seeking to expand my skills. From mastering API integration to exploring animation tools like Framer Motion or enhancing UI components with Styled Components, I thrive on solving challenges that blend logic and creativity. Staying current with modern web trends enables me to build clean, maintainable codebases while tackling complex problems.",
    },
    {
      title: "Beyond Development",
      text: "Collaboration and communication are central to my approach. With over a decade of teaching experience in another field, I’ve developed strong skills in conveying ideas and fostering teamwork. I also enjoy exploring emerging technologies to push the limits of what’s possible on the web, bringing fresh ideas to life.",
    },
  ];

  return (
    <div className="mx-auto max-w-[150rem] bg-white px-4 pt-16 text-headerNav sm:px-paddingX06 sm:portrait:px-12">
      <div className="flex flex-col items-start sm:flex-row sm:gap-10">
        {info.map((para, index) => (
          <div
            className="flex w-full flex-col gap-2 border-t border-t-[#c9c9c9] py-4 last:border-b last:border-b-[#c9c9c9] sm:border-t-0 last:sm:border-b-0"
            key={index}
          >
            <h4 className="text-[1.2em] leading-normal text-black">
              {para.title}
            </h4>
            <p className="text-[0.8em] text-[#636363]">{para.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutInfo;
