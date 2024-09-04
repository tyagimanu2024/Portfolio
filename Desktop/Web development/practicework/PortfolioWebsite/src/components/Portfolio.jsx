import weatherimage from "../assets/weatherimage.jpeg";
import bookimage from "../assets/bookimage.jpeg";
import netflix from "../assets/netfliximage.jpeg";
import spotify from "../assets/spotifyimage.jpeg";
import recipe from "../assets/recipeimage.jpeg";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: weatherimage },
    { id: 2, src: bookimage },
    { id: 3, src: netflix },
    { id: 4, src: spotify },
    { id: 5, src: recipe },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out Some of My Work Here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="duration-200 hover:scale-105 shadow-md shadow-gray-600 rounded-lg overflow-hidden flex flex-col items-center justify-center "
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center mt-4">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
