import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function work() {
  return (
    <div
      id="experience"
      className=" max-w-[1000px] justify-center items-center my-10   mx-auto text-[black]"
    >
      <h1 className=" md:flex font-bold my-10 text-[30px]  m-5">
        <span className=" text-[black]">1.</span>Where I have worked
      </h1>
      <div className="md:flex flex-row justify-between m-2">
        <div className="w-[80%] md:w-[20%]">
          <h1 className=" border-l-2 text-[#6c43ff]  p-3 font-bold text-[20px] border-[#6c43ff]">
            YoUnity
          </h1>
        </div>

        <div className="w-[100%] ">
          <div className=" border-r-2 p-5 border-b-2  border-[#6c43ff]">
            <div className="flex flex-col m-5 font-bold text-[23px]">
              <h1 className=" text-[#6c43ff]">
                Front End Intern
                <span id="span">@yoUnity</span>
              </h1>
              <h1>Sep 2022 -Mar 2023</h1>
            </div>
            <div className="  justify-center items-center flex  flex-col">
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                <AiFillStar id="span" />
                Perform thorough and effective code reviews within the team,
                focusing on cleanliness and efficiency.
              </h1>
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                <AiFillStar id="span" />
                Enhance code efficiency to minimize application latency and
                maximize performance.
              </h1>
              <h1 className=" flex flex-row m-3 justify-center items-center ">
                <AiFillStar id="span" />
                Implement and promote web accessibility standards across the
                application.
              </h1>
              <h1 className=" flex flex-row  m-3 justify-center items-center ">
                <AiFillStar id="span" />
                Actively participate in an Agile-driven environment, skillfully
                managing project timelines and leveraging available resources.
              </h1>
            </div>
          </div>

          <div className=" border-l-2 p-5 border-b-2 rounded-lg border-[#6c43ff]">
            <div className="flex flex-col m-5 font-bold text-[23px]">
              <h1 className=" text-[#6c43ff]">
                Front End Dev
                <span id="span">@yoUnity</span>
              </h1>
              <h1>Mar 2023 -July 2023</h1>
            </div>

            <h1 className=" flex flex-row m-3 justify-center items-center ">
              <AiFillStar id="span" />
              Front End Developer I am currently working as a Front End
              Developer at Instant Domains, Inc.
            </h1>
            <h1 className=" flex flex-row m-3 justify-center items-center ">
              <AiFillStar id="span" />
              Implementing revenue collection features to simplify the process
              for users.
            </h1>
            <h1 className=" flex flex-row m-3 justify-center items-center ">
              <AiFillStar id="span" />
              Prioritizing user experience to ensure a seamless and efficient
              website creation process.
            </h1>
            <h1 className=" flex flex-row  m-3 justify-center items-center ">
              <AiFillStar id="span" />
              Continuously optimizing performance and ensuring web accessibility
              throughout our applications.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
