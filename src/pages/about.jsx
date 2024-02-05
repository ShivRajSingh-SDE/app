import {
  AiOutlineStrikethrough,
  AiFillMail,
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import React from "react";
import mine from "../assets/img/mine.png";
import mine2 from "../assets/img/mine2.png";

export default function about() {
  return (
    <div
      id="about"
      className="md:flex text-[black] justify-between w-[90%] md:w-[100%] flex-row my-10 max-w-[1100px] mx-auto"
    >
      <div className=" float-left flex m-2  flex-col">
        <h1 className="font-bold float-left flex text-[25px] text-[#80808098] ">
          <span id="span">1.</span>
          About Me
        </h1>
        <div className=" p-1 my-10 float-left flex">
          <div className="float-left  ">
            <h1 className="font-thin text-[18px] ">
              Greetings, I'm ShivRaj Singh, and I derive immense satisfaction
              from crafting online innovations. My central domain of expertise
              is <span className="text-[red] font-medium">React.js</span>, and
              I'm exceptionally skilled in creating dynamic and interactive web
              interfaces with a robust foundation in
              <span className=" text-[#6c43ff] font-medium pl-1">
                Express.js
              </span>
              .
            </h1>

            <h1 className="font-thin text-[18px] my-4">
              My evolution as a developer has been a journey of continuous
              expansion, embracing a diverse spectrum of technologies. I possess
              hands-on mastery of
              <span className="text-[red] font-medium pl-1">
                TypeScript,
                <span className="text-[red] font-medium pl-1"></span> React,
                <span className="text-[#483bff] font-medium pl-1">Node,</span>
                <span className="text-[#ff3cd5] font-medium pl-1">
                  MongoDB,
                </span>
                <span className="text-[#5fee3b] font-medium pl-1">LLM,</span>
                <span className="text-[#3aace0] font-medium pl-1">API,</span>
                <span className="text-[#8b922b] font-medium pl-1">Express</span>
              </span>
              . This proficiency empowers me to engineer resilient, scalable
              applications.
            </h1>

            <div className="flex flex-col  my-8">
              <h1 className="font-semibold float-left flex text-[20px] border-b-2 border-[#6c43ff] my-4">
                My tech stack includes:
              </h1>
              <div className=" md:flex flex-row justify-center items-center md:justify-around">
                <div className="flex flex-col ">
                  <h1 className="flex flex-row ">
                    <AiOutlineStrikethrough id="span" className="m-2" />
                    React
                  </h1>
                  <h1 className="flex flex-row ">
                    <AiOutlineStrikethrough id="span" className="m-2" />
                    Tailwind/CSS
                  </h1>
                  <h1 className="flex flex-row ">
                    <AiOutlineStrikethrough id="span" className="m-2" />
                    Express/Node.js
                  </h1>
                  <h1 className="flex flex-row ">
                    <AiOutlineStrikethrough id="span" className="m-2" />
                    AWS, Next Js
                  </h1>
                  <h1 className="flex flex-row ">
                    <AiOutlineStrikethrough id="span" className="m-2" />
                    TensorFlow, Bash, Figma, C/C++
                  </h1>
                </div>

                <div className="flex flex-col">
                  <h1 className="flex flex-row ">
                    <AiOutlineStrikethrough id="span" className="m-2" />
                    TypeScript, JavaScript(ES6+)
                  </h1>
                  <h1 className="flex flex-row ">
                    <AiOutlineStrikethrough id="span" className="m-2" />
                    Three.js, Redux
                  </h1>
                  <h1 className="flex flex-row ">
                    <AiOutlineStrikethrough id="span" className="m-2" />
                    Bootstrap, jQuery
                  </h1>
                  <h1 className="flex flex-row ">
                    <AiOutlineStrikethrough id="span" className="m-2" />
                    PostMan, Api
                  </h1>
                </div>
              </div>

              <div className="flex flex-col  my-4 ">
                <h1 className="font-[bold] float-left flex text-[20px] border-b-2 border-[#6c43ff]  my-8">
                  Currently, I'm learning:
                </h1>
                <div className=" flex flex-row justify-around">
                  <div className="flex flex-col">
                    <h1 className="flex flex-row ">
                      <AiOutlineStrikethrough id="span" className="m-2" />
                      Solid.js
                    </h1>
                    <h1 className="flex flex-row ">
                      <AiOutlineStrikethrough id="span" className="m-2" />
                      LLM/ BlockChain
                    </h1>
                  </div>

                  <div className="flex flex-col">
                    <h1 className="flex flex-row ">
                      <AiOutlineStrikethrough id="span" className="m-2" />
                      Ai Models (LLama2, Gpt3.5 Turbo)
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:m-5  w-[70%]  justify-center items-center  md:w-[100%]  flex">
        <div className=" border-4 justify-center items-center flex border-[#6c43ff] rounded-lg  p-4">
          <img
            src={mine2}
            className="  rounded-xl border-4 md:translate-x-0 translate-x-10 scale-105 hover:scale-100 duration-300 ease-in-out  border-[#6c43ff]  p-2 md:h-[70vh] md:w-[100%] "
          ></img>
        </div>
      </div>

      <div className="fixed bottom-10 right-4 ">
        <div className="md:flex hidden p-1 bg-[#6c43ff] rounded-3xl  hover:h-[35vh] h-[30vh] w-[1%] "></div>
        <a
          className="m-5 font-bold text-[30px] "
          href="mailto:email@echoecho.com?subject=SweetWords&body=Please send me a copy of your new program!"
        >
          <AiFillMail className="hover:scale-125 duration-200 ease-in-out hover:text-[#6c43ff]" />
        </a>
        <a
          className="m-5 font-bold text-[30px]  hover:text-[#6c43ff]"
          href="https://www.linkedin.com/in/shiv-singh-7bb9411b9/"
        >
          <AiOutlineLinkedin className="hover:scale-125 duration-200 ease-in-out" />
        </a>
        <a
          className="m-5 font-bold text-[30px] "
          href="https://github.com/shivamkumarsha"
        >
          <AiFillGithub className=" hover:scale-125 duration-200 ease-in-out hover:text-[#6c43ff]" />
        </a>
      </div>

      <div className="fixed bottom-5 md:bottom-40  text-[#6c43ff] font-semibold left-32 md:left-1 md:rotate-90 -translate-x-20">
        <a
          className="flex flex-row justify-center items-center gap-5 hover:scale-105 ease-in-out duration-200"
          href="mailto:email@echoecho.com?subject=SweetWords&body=Please send me a copy of your new program!"
        >
          <AiFillMail />
          ShivrajSingh.info.me@gmail.com
        </a>
      </div>
    </div>
  );
}
