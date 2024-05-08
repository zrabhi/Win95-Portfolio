import bio from "../assets/win95Icons/bio.png";
import html from "../assets/techs/html.png";
import self from "../assets/Biography/zac.png";

const Technologies = [
  {
    image: "https://img.shields.io/badge/-JavaScript-yellow",
    alt: "Javascript",
  },
  { image: "https://img.shields.io/badge/-TypeScript-blue", alt: "Typescript" },
  { image: "https://img.shields.io/badge/-ReactJS-3e8bc3", alt: "React" },
  { image: "https://img.shields.io/badge/-NodeJS-61b083", alt: "NODE JS" },
  { image: "https://img.shields.io/badge/-NestJS-red", alt: "NEST JS" },
  { image: "https://img.shields.io/badge/-HTML-darkred", alt: "HTML" },
  { image: "https://img.shields.io/badge/-CSS-ligthred", alt: "CSS" },
  { image: "https://img.shields.io/badge/-UI-orange", alt: "Ui" },
  { image: "https://img.shields.io/badge/-UX-green", alt: "Ux" },
  { image: "https://img.shields.io/badge/-AWS-orange", alt: "AWS" },
  {
    image: "https://img.shields.io/badge/-tailwinds%20CSS-darkgreen",
    alt: "Tailwind CSS",
  },
  {
    image: "https://img.shields.io/badge/-Sys%20admin-blue",
    alt: "System administration",
  },
  { image: "https://img.shields.io/badge/-Python-blue", alt: "Python" },
  { image: "https://img.shields.io/badge/-SQL-lightgrey", alt: "Sql" },
  {
    image: "https://img.shields.io/badge/-Posgresql-darkblue",
    alt: "Posgresql",
  },
  { image: "https://img.shields.io/badge/-VueJS-61b083", alt: "Vuejs" },
  { image: "https://img.shields.io/badge/-Figma-8c5aee", alt: "Figma" },
];

export const Biography = () => {
  return (
    <div className="overflow-y-auto resize z-99 border-4 left-48  fixed h-[780px] w-[550px] bg-gray95">
      <div className="m-[1px]  w-auto p-1 z-10 border-2 bg-blue95 flex justify-between items-center">
        <div className="h-77 w-[540px] flex">
          <img className="pt-1 h-5" src={bio} alt="biography" />
          <p className="text-white p-1">Biography</p>
        </div>
        <div className="flex  gap-1 justify-between">
          <button id="resume" type="button">
            <span className="">-</span>
          </button>
          <button id="close" type="button">
            <span className="">x</span>
          </button>
          <button id="resize">
            <span className="">-</span>
          </button>
        </div>
      </div>
      {/*
      content div
      */}
      <div className=" pt-10 px-16">
        <img className="w-full min-h-72 h-auot" src={self} alt="self" loading="lazy" />
        <h2 className="text-2xl font-bold py-5"> Zakaria Rabhi (ZAC)</h2>
        <h4 className="text-gray-600 font-medium pt- text-xs">
          I'm a junior software system administrator based in Khouribga,
          Morocco, and a student at 1337 Coding school - 42 Network I'm
          passionate about managing systems and ensuring their smooth operation
          to tackle real-world challenges.
        </h4>
        <h4 className="text-gray-600 font-medium pt-4 text-xs">Morocco 📍</h4>
        <div className="flex flex-wrap items-center gap-2 mt-5">
          {Technologies.map((image: any, index: number) => {
            console.log(image.image);

            return (
              <img
                className="w-auto h-5 rounded-none text-xs"
                src={image.image}
                alt={image.alt}
                key={index}
              />
            );
          })}
        </div>
        <div className="pt-7">
          <h3 className="underline font-bold text-md pb-1">About Me</h3>
          <p className="text-sm font-thin pt-[1rem]">
            I'm a 23-year-old software maestro, weaving the web as a full-stack
            developer by day, and navigating the complex labyrinths of system
            administration by night. My true passion lies in designing and
            deploying powerful software solutions that not only serve but also
            elevate the communities and individuals around me.
          </p>
          <p className="text-sm font-thin pt-[1rem]">
            As the sun sets, my focus shifts to the robust backbone of
            technology—system administration. Here, I master the art of
            precision, ensuring that the systems not only perform optimally but
            are also fortified against the unforeseen. My nights are spent in a
            vigilant quest to maintain, troubleshoot, and optimize, ensuring
            that the digital infrastructures I oversee are not just functional
            but formidable.
          </p>
          <p className="text-sm font-thin pt-[1rem]">
            Driven by curiosity and fueled by a relentless pursuit of
            excellence, I continue to evolve, adapt, and innovate. Whether it's
            deploying cutting-edge solutions or ensuring the smooth operation of
            complex systems, my goal remains constant: to leverage technology to
            forge connections, solve problems, and create a lasting impact.
          </p>
          <p className="text-sm font-thin pt-[1rem]">
            Through my dual roles, I not only bridge the gap between creation
            and operation but also embody the spirit of modern tech
            wizardry—transforming theoretical knowledge into real-world impact,
            one project at a time.
          </p>
        </div>
      </div>
    </div>
  );
};
