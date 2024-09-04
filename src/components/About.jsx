// About.js
const About = () => {
    return (
      <div name="about" className=" w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="md: ml-[48px] max-w-screen p-8 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
          </div>
          <p className="text-2xl p-8 mt-20">
           <span>Job Role : <span className="text-gray-500">Full Stack Developer</span></span> <br />
           <span>Address : <span className="text-gray-500 mt-">Greater Noida</span></span> <br />
           <span>Education : <span className="text-gray-500">G.L. Bajaj Institute Of Technology and Management</span></span> <br />
           <span>Skills : <span className="text-gray-500">Data Structures & Algorithm , Problem Solving , C , Java , HTML , CSS , Javascript , Communication , Leadership , Teamwork  </span></span> <br />
           <span>Interest : <span className="text-gray-500">Travelling , Gymming , Music</span></span> 
          </p>
          <br />
          <p className="text-xl p-8 leading-released">
          As a full-stack web developer, I specialize in crafting visually appealing and user-friendly web pages using HTML, CSS, JavaScript, React, and Next.js. My technical expertise allows me to build dynamic and responsive websites that provide an excellent user experience.

Beyond my technical skills, I'm also well-versed in communication, which helps me collaborate effectively with teams and clients. In my free time, I enjoy staying active as a fitness enthusiast, always striving for balance between mind and body.

Explore my portfolio to see my work and get a glimpse of what drives me
          </p>
        </div>
      </div>
    );
  };
  
  export default About;
  