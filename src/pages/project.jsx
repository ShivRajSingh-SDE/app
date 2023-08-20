import React from "react";
import projectimg from "../assets/img/project.png";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

export default function project() {
  return (
    <div id="projects" className="max-w-[1090px] mx-auto text-[white] h-[auto]  md:h-[90vh] m-5  p-5 flex flex-col p-2">
      <h1 className=" font-bold text-[30px] flex p-5 float-left my-8">
        <span id="span">3.</span>Some Things I have Built
      </h1>
      <div className=" my-10 md:flex flex-row justify-between">
        <div className=" rounded-xl w-[100%] md:w-[70%] justify-center items-center flex">
          <a
            href="https://shivportfolioid.netlify.app/"
            className="border-2 p-2 rounded-xl"
          >
            <img
              src={projectimg}
              className=" rounded-xl hover:scale-105 ease-in-out duration-200 border-2 border-[#61dafb] p-3"
            ></img>
          </a>
        </div>

        <div className="w-[100%] md:w-[90%] p-5 justify-center items-center  flex flex-col">
          <h1 className="font-bold  text-[15px] text-teal-300 ">
            Featured Project
          </h1>

          <h1 className="font-bold  text-[30px] text-[#ccc8c8]">
            All Projects
          </h1>

          <div className="bg-[#23233d]   font-thin rounded-xl md:-translate-x-14">
            <h1 className=" p-4  ">
              In my portfolio, I have worked on diverse projects, including an
              e-commerce website, event management app, social networking
              platform, project management dashboard, and health and fitness
              tracking app.{" "}
            </h1>
          </div>

          <div className=" flex flex-row justify-center gap-2 md:gap-5 m-4 items-center">
            <h1 className="font-bold hover:scale-110 duration-200 ease-in-out text-[20px]">
              React
            </h1>
            <h1 className="hover:scale-110 duration-200 ease-in-out font-bold text-[20px]">
              Material-ui
            </h1>
            <h1 className=" hover:scale-110 duration-200 ease-in-out font-bold text-[20px]">
              Typescript
            </h1>
          </div>

          <div className=" flex flex-row justify-center gap-5 items-center">
            <a
              href="https://github.com/shivamkumarsha"
              className="font-bold hover:scale-105 hover:text-teal-300 text-[30px]"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://shivportfolioid.netlify.app/"
              className="font-bold hover:text-teal-300 hover:scale-105 text-[30px]"
            >
              <AiOutlineLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
