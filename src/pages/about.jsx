import { AiOutlineStrikethrough,  AiFillMail, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import React from "react";
import mine from '../assets/img/mine.png'

export default function about() {
  return (
    <div id="about" className="md:flex text-[white] justify-between w-[100%] md:w-[90%] flex-row my-10 max-w-[1200px] mx-auto">
      <div className=" float-left flex m-5  flex-col">
        <h1 className="font-[bold] float-left flex text-[25px] ">
          <span id="span">1.</span>
          About Me
        </h1>
        <div className=" p-1 my-10 float-left flex">
        <div className="float-left  ">

        <h1 className="font-thin text-[18px] ">Hello, I'm ShivRaj Singh, and I enjoy creating things that live on the internet. My primary focus and specialization lie in <span id="span">ReactJS</span>. With a strong background in <span id="span">JavaScript</span>, I am adept at crafting dynamic and interactive web interfaces.</h1>


        <h1 className="font-thin text-[18px] my-4">My journey as a developer has allowed me to expand my knowledge and work with a diverse set of technologies. I have hands-on experience with <span id="span">TypeScript, HTML, and CSS</span>, enabling me to build robust and scalable applications.</h1>

        <div className="flex flex-col  my-8">
        <h1 className="font-[bold] float-left flex text-[20px] border-b-2 border-[#61dafb] my-4">My tech stack includes:</h1>
        <div className=" md:flex flex-row justify-center items-center md:justify-around">
        <div className="flex flex-col ">
                <h1 className="flex flex-row "><AiOutlineStrikethrough id="span" className="m-2"/>React</h1>
                <h1  className="flex flex-row "><AiOutlineStrikethrough id="span" className="m-2"/>Tailwind/CSS</h1>
                <h1   className="flex flex-row "><AiOutlineStrikethrough id="span" className="m-2"/>Express/Node.js</h1>

            </div>

            <div className="flex flex-col">
                <h1   className="flex flex-row "><AiOutlineStrikethrough id="span" className="m-2"/>TypeScript, JavaScript(ES6+)</h1>
                <h1   className="flex flex-row "><AiOutlineStrikethrough id="span" className="m-2"/>Three.js, React-relay</h1>
                <h1   className="flex flex-row "><AiOutlineStrikethrough id="span" className="m-2"/>Bootstrap, jQuery</h1>

            </div>

        </div>

        <div className="flex flex-col  my-4 ">
        <h1 className="font-[bold] float-left flex text-[20px] border-b-2 border-[#61dafb]  my-8">Currently, I'm learning:</h1>
        <div className=" flex flex-row justify-around">
        <div className="flex flex-col">
                <h1 className="flex flex-row "><AiOutlineStrikethrough id="span" className="m-2"/>Solid.js</h1>
                <h1  className="flex flex-row "><AiOutlineStrikethrough id="span" className="m-2"/>Next.js</h1>


            </div>

            <div className="flex flex-col">
                <h1   className="flex flex-row "><AiOutlineStrikethrough id="span" className="m-2"/>Python</h1>


            </div>

        </div>


        </div>
        </div>
        </div>


      </div>



      </div>
      

      <div className="md:m-5 m-0 p-3 justify-center items-center w-[100%] md:w-[70%]  flex">
        <div className=" border-4 border-[#61dafb] rounded-lg  p-5">
            <img src={mine} className=" rounded-xl border-4 hover:scale-105 duration-300 ease-in-out  border-[#61dafb]  p-4 "></img>
        </div>

      </div>

      
      <div className="fixed bottom-10 right-4">
        <a className="m-5 font-bold text-[30px] " href="mailto:email@echoecho.com?subject=SweetWords&body=Please send me a copy of your new program!"><AiFillMail className="hover:scale-125 duration-200 ease-in-out hover:text-[#61dafb]"/></a>
        <a className="m-5 font-bold text-[30px]  hover:text-[#61dafb]" href='https://www.linkedin.com/in/shivraj-signh-7bb9411b9/'><AiOutlineLinkedin className="hover:scale-125 duration-200 ease-in-out"/></a>
        <a className="m-5 font-bold text-[30px] " href='https://github.com/shivamkumarsha'><AiFillGithub className=" hover:scale-125 duration-200 ease-in-out hover:text-[#61dafb]" /></a>
      </div>


      <div className="fixed bottom-5 md:bottom-40 font-thin text-[#61dafb] left-32 md:left-1 md:rotate-90 -translate-x-16">
        <a className="flex flex-row justify-center items-center gap-5 hover:scale-105 ease-in-out duration-200" href="mailto:email@echoecho.com?subject=SweetWords&body=Please send me a copy of your new program!"><AiFillMail/>ShivrajSingh.info.me@gmail.com</a>
      </div>


    </div>
  );
}
