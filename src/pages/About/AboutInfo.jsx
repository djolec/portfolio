const AboutInfo = () => {
  const info = [
    {
      title: "Crafting Experiences",
      text: "I am a passionate front-end developer with a deep appreciation for building seamless, intuitive, and visually appealing web applications. With a strong foundation in JavaScript, React, and CSS frameworks like Tailwind, I specialize in creating responsive, user-friendly designs that deliver a polished experience across all devices. Every line of code I write aims to bridge the gap between creativity and functionality, turning ideas into interactive realities.",
    },
    {
      title: "Learning & Growing",
      text: "Driven by a curiosity for innovation, I constantly seek opportunities to expand my expertise. Whether diving into the nuances of API integration, experimenting with animation libraries like Framer Motion, or refining UI components with Styled Components, I thrive on solving challenges that require both logic and creativity. My dedication to staying at the forefront of modern web development ensures that I can tackle complex problems while maintaining clean, maintainable codebases.",
    },
    {
      title: "Beyond Development",
      text: "Beyond coding, I believe in the power of collaboration and communication. With over a decade of teaching experience in a different field, I’ve honed the ability to convey ideas effectively, fostering teamwork and mutual growth. I also enjoy exploring emerging technologies and integrating them into my projects, pushing the boundaries of what’s possible on the web.",
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
