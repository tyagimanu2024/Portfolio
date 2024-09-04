import image from "../assets/image.jpg";
import { Link } from "react-scroll";
import { MdArrowRightAlt } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex gap-8 items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-2xl sm:text-7xl font-bold text-white">
            I'm <span className="text-4xl text-gray-500">Manu Tyagi</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a passionate second-year engineering student with a strong
            interest in technology and design. As a full-stack web developer and
            UI/UX designer, I enjoy creating seamless and visually appealing
            digital experiences. My skills bridge the gap between code and
            creativity, allowing me to build both functional and beautiful web
            applications. Welcome to my portfolio, where you can explore my work
            and projects!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRightAlt size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className=" h-[487px] w-[360px] ">
          <img
            src={image}
            alt="my-image"
            className="rounded-2xl mt-14 w-full md:w-full md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
