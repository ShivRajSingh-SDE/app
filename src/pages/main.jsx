import { Parallax } from "react-parallax";

export default function Main() {
  return (
    <Parallax
      blur={10}
      bgImage="path/to/image.jpg"
      bgImageAlt="the cat"
      strength={200}
    >
      <div className="max-w-[1200px] mx-auto flex justify-center items-center h-[90vh] relative">
        <div className="flex flex-col justify-center items-center float-left">
          <div className=" flex flex-col justify-center items-center float-left">
            <span
              id="span"
              className="font-semibold text-[30px]   justify-center items-center animated-border"
            >
              Hi, my name is
            </span>

            <h1 className="font-bold  text-[#b5d4dd] text-[50px] md:text-[80px]">
              ShivRaj Singh
            </h1>
            <button className=" hidden flex-col justify-center items-center md:flex  fixed left-1 top-center -translate-y-40  hover:rotate-45 ease-in-out duration-700  text-[black] bg-[#61dafb]  0 w-[20vh] p-1 -translate-x-5 rotate-90 rounded-xl font-bold">
              2nd semester<span className=""> undergrad</span>
            </button>
            <h1 className="font-semibold text-[20px] text-[#b5d4dd] ">
              I build things for web
            </h1>
            <h1 className="font-thin text-[20px] text-[#b5d4dd] p-5">
              Experienced front-end web developer with a passion for building
              dynamic web applications. Skilled in ReactJS, JavaScript,
              TypeScript, HTML, CSS, and GraphQL. Eager to contribute to your
              projects and stay updated with the latest technologies in web
              development. Let's connect and collaborate for success.{" "}
              <a id="span" href="">
                Learn More
              </a>
            </h1>

            <a href="">
              <button className="border-2 border-[#61dafb] p-3 rounded-xl hover:scale-110 ease-in-out duration-300 text-[white] border-b-2">
                My Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
