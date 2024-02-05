import { Parallax } from "react-parallax";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Main() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div
      id="main"
      className="max-w-[1200px] z-[-1] mx-auto flex justify-center items-center h-[90vh] relative"
    >
      <div className="flex flex-col justify-center items-center float-left">
        <div className=" flex flex-col justify-center items-center float-left">
          <span
            id="span"
            className="font-bold  text-[30px] border-b-2 border-[#4f47c565] text-[#80808070]   justify-center items-center animated-border"
          >
            Hi, my name is
          </span>

          <h1 className="font-bold relative text-[#4f47c565]   text-[50px] md:text-[80px]">
            ShivRaj Singh
          </h1>

          <div
            className="flex flex-row  absolute  p-2 bg-[#00000027] border-2 drop-shadow-2xl shadow-2xl   rounded-l-full
           font-light  text-black rotate-12 hover:rotate-2 right-40  top-60"
          >
            <div className="hidden  md:flex flex-col   text-black font-bold  right-40  top-60 ">
              Dominating Domains
              <span className="text-[#e98543] justify-center flex ">
                AI, <span className=" text-[#4d43dd]">LLM,</span>
                <span className=" text-[#cb40ce]">MERN</span>
              </span>
            </div>
          </div>

          <h1 className="font-bold text-[20px] justify-center items-center flex text-[#808080a1] p-2">
            As a MERN pro, <br className=" flex md:hidden"></br> I build
            top-notch web solutions.
          </h1>
          <h1 className=" font-thin text-[20px] p-5 text-[#000000]">
            Seasoned Full Stack web architect with an unwavering commitment to
            shaping dynamic web applications. Proficiency spans ReactJS,
            JavaScript, TypeScript, HTML, CSS, Node.js, Express.js, MongoDB,
            LLM, API, and TypeScript. Eager to elevate your projects and remain
            at the vanguard of emerging web technologies. Let's connect and
            create triumph together.
            <a id="span" href="https://github.com/shivamkumarsha">
              Learn More
            </a>
          </h1>

          <button className="text-[Gray] font-semibold border-[white] bg-[#6c43ff33] drop-shadow-2xl shadow-2xl p-3 rounded-xl hover:scale-110  ease-in-out duration-300  border-b-2">
            <a href="https://github.com/ShivRajSingh-SDE" className=" ">
              My Projects
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
