const AboutInfo = () => {
  const info = [
    {
      title: "Lorem, ipsum dolor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere tempora voluptatibus possimus dignissimos beatae error, accusantium veniam voluptatem, a facilis minus quasi assumenda iusto.",
    },
    {
      title: "Lorem, ipsum dolor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere tempora voluptatibus possimus dignissimos beatae error, accusantium veniam voluptatem, a facilis minus quasi assumenda iusto.",
    },
    {
      title: "Lorem, ipsum dolor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere tempora voluptatibus possimus dignissimos beatae error, accusantium veniam voluptatem, a facilis minus quasi assumenda iusto.",
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
            <h4 className="text-[1.4em] text-black">{para.title}</h4>
            <p className="text-[0.8em] text-[#636363]">{para.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutInfo;
