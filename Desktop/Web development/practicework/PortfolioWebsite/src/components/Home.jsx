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
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a full stack developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium, pariatur. Dignissimos, asperiores dolor, illo similique
            sapiente, esse nihil libero repellendus porro dolorem quisquam
            eveniet ipsam ipsum dolore iusto vel fugiat.
          </p>
          <div>
            <Link to="portfolio"smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRightAlt size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>
        <div className=" h-[487px] w-[554px] ">
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
