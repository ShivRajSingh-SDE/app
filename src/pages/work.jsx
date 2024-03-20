import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function work() {
  return (
    <div
      id="experience"
      className=" md:max-w-[80%] p-4 justify-center items-center my-10   mx-auto text-[white]"
    >
      {/* <h1
        id="textstyle"
        className=" text-center w-full font-bold my-10 text-[30px]  m-5"
      >
        Where I have worked
      </h1> */}
      <div className="md:flex flex-col justify-between m-2">
        <div className="w-[80%] md:w-[20%]">
          <h1 className=" border-l-2 mb-10 text-[#ff43f6]  p-3 font-bold text-[20px] border-[#581b41]">
            Experience
          </h1>
        </div>
        <br />
        <br />

        <div className="md:w-[80%] mx-auto ">
          <div className=" border-r-2 p-5 text border-b-2 rounded-br-lg  border-[#488ce6]">
            <div className="flex flex-col m-5 font-bold text-[23px]">
              <h1 className=" text-[#6c43ff]">
                Front End Intern
                <span id="span"> @yoUnity</span>
              </h1>
              <h1>Sep 2022 -Mar 2023</h1>
            </div>
            <div className=" justify-start items-end flex flex-col">
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                Conduct comprehensive and meticulous code reviews within the
                team, prioritizing clarity and efficiency.
              </h1>
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                Optimize code performance to minimize application response times
                and maximize scalability.
              </h1>
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                Champion and enforce web accessibility standards across the
                application to ensure inclusivity and compliance.
              </h1>
              <h1 className=" flex flex-row  m-3 justify-center items-center ">
                Engage proactively in an Agile-oriented environment, adeptly
                managing project schedules and leveraging available resources
                for success.
              </h1>
            </div>
          </div>

          <div className=" border-l-2 p-5 border-b-2 rounded-bl-lg  border-[#a33378]">
            <div className="flex flex-col m-5 font-bold justify-end items-end text-[23px]">
              <h1 id="textstyle" className=" text-[#6c43ff]">
                Online Web Developer
                <span id="span"> @WebIO</span>
              </h1>
              <h1>Mar 2023 -Aug 2023</h1>
            </div>

            <div className=" flex flex-col justify-start items-start">
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                <AiFillStar id="span" />
                Full Stack Web Developer with expertise in front-end
                technologies. Currently contributing as a Front End Developer at
                Instant Domains, Inc.
              </h1>
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                <AiFillStar id="span" />
                Designing and implementing revenue-generating features to
                streamline user interactions and enhance platform monetization.
              </h1>
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                <AiFillStar id="span" />
                Prioritizing user-centric design principles to deliver intuitive
                and efficient website experiences, optimizing customer
                satisfaction.
              </h1>
              <h1 className=" flex flex-row  m-3 justify-center items-center ">
                <AiFillStar id="span" />
                Dedicated to ongoing performance optimization and ensuring web
                accessibility compliance across all applications, fostering
                inclusivity and user engagement.
              </h1>
            </div>
          </div>

          <div className=" border-r-2 p-5 text border-b-2 rounded-br-lg  border-[#488ce6]">
            <div className="flex flex-col m-5 font-bold text-[23px]">
              <h1 className=" text-[#6c43ff]">
                Lead Full Stack Developer
                <span id="span"> @GITAM</span>
              </h1>
              <h1>Sep 2023 - 2025</h1>
            </div>
            <div className=" justify-start items-end flex flex-col">
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                Runner-up at Rajasthan Hackathon and participant at SIH
                Hackathon, demonstrating problem-solving skills and teamwork.
              </h1>
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                Led development teams to success in various projects, fostering
                collaboration and innovation.
              </h1>
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                Implemented cutting-edge technologies to optimize application
                performance and ensure seamless user experiences.
              </h1>
              <h1 className=" flex flex-row  m-3 justify-center items-center ">
                Actively contributed to an Agile-driven environment,
                coordinating project timelines and resource utilization
                effectively.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
