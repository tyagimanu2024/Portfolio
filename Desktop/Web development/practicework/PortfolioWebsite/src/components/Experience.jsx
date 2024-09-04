import html from "../assets/html.jpeg";
import css from "../assets/css.jpeg";
import react from "../assets/react.jpeg";
import tailwind from "../assets/tailwind.jpeg";
import javascript from "../assets/javascript.jpeg";
import nextjs from "../assets/nextjs.jpeg";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "hover:shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "hover:shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "hover:shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "hover:shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "hover:shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next Js",
      style: "hover:shadow-white",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Expereince
          </p>
          <p className="py-6">
            These are the the technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className={"w-20 mx-auto"} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
