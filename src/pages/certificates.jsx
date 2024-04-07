import React, { useState } from "react";
import img1 from "../assets/img/secret/Internship  Certificate.png";
import img2 from "../assets/img/secret/Mait Certificate.jpg";
import img3 from "../assets/img/secret/Rajeshthan Certificate.jpeg";
import img4 from "../assets/img/secret/Udemy Certificate.jpg";

const Certificates = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isFullScreen2, setIsFullScreen2] = useState(false);
  const [isFullScreen3, setIsFullScreen3] = useState(false);
  const [isFullScreen4, setIsFullScreen4] = useState(false);

  const handleImageClick = () => {
    setIsFullScreen((prevState) => !prevState);
  };
  const handleImageClick2 = () => {
    setIsFullScreen2((prevState) => !prevState);
  };
  const handleImageClick3 = () => {
    setIsFullScreen3((prevState) => !prevState);
  };
  const handleImageClick4 = () => {
    setIsFullScreen4((prevState) => !prevState);
  };

  return (
    <div
      id="Certificates"
      className="md:max-w-[80%] p-4 justify-center items-center my-10 mx-auto text-[white]"
    >
      <div className="md:flex flex-col justify-between m-2">
        <div className="w-[80%] md:w-[20%]">
          <h1
            id="textstyle"
            className=" border-l-2 mb-10  p-3 font-bold text-[25px] border-[#4bf3ff]"
          >
            Certificates
          </h1>
        </div>

        <div className="md:w-[80%] mx-auto ">
          <div className="border-l-2 p-5 text border-b-2 rounded-bl-lg justify-around  border-[#f04aff] flex md:flex-row-reverse flex-col-reverse">
            <div className="md:w-1/2">
              <div className="flex flex-col m-5 font-bold text-[23px] md:items-start  items-center">
                <h1 className="text-[#6c43ff]">
                  Front End Intern
                  <span id="span"> @yoUnity</span>
                </h1>
                <h1>Sep 2022 - Mar 2023</h1>
              </div>
              <ul className="text-start ">
                <li className="flex flex-row m-3 justify-center items-center ">
                  Conduct comprehensive and meticulous code reviews within the
                  team, prioritizing clarity and efficiency.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Optimize code performance to minimize application response
                  times and maximize scalability.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Champion and enforce web accessibility standards across the
                  application to ensure inclusivity and compliance.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Engage proactively in an Agile-oriented environment, adeptly
                  managing project schedules and leveraging available resources
                  for success.
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 flex flex-row justify-center md:items-center items-center ">
              <div className="relative">
                {isFullScreen ? (
                  <div
                    className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-90"
                    onClick={handleImageClick}
                  >
                    <img
                      className="max-h-full max-w-full"
                      src={img1}
                      alt="Fullscreen Image"
                    />
                    <span className="rotate-90 absolute z-50 cursor-pointer hover:bg-[#ff50f0]  -left-12 top-1/2 transform -translate-y-1/2 bg-[#808080b4] px-2 py-1 rounded-lg text-white">
                      Click to Expand
                    </span>
                  </div>
                ) : (
                  <>
                    <img
                      className="drop-shadow-2xl shadow-2xl rounded-xl shadow-[#ffffff46] cursor-pointer"
                      src={img1}
                      onClick={handleImageClick}
                    />
                    <span className="rotate-90 absolute z-50 cursor-pointer hover:bg-[#ff50f0]  -left-12 top-1/2 transform -translate-y-1/2 bg-[#808080b4] px-2 py-1 rounded-lg text-white">
                      Click to Expand
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="border-r-2 p-5 text border-b-2 rounded-br-lg justify-around  border-[#45fff6] flex md:flex-row flex-col-reverse">
            <div className="md:w-1/2">
              <div className="flex flex-col m-5 font-bold text-[23px] md:items-end  items-center">
                <h1 className="text-[#6c43ff]">
                  Hackathon Leader || Core Developer
                  <span id="span"> @MAIT</span>
                </h1>
                <h1>Sep 2022 - Mar 2023</h1>
              </div>
              <ul className="md:text-end  text-center">
                <li className="flex flex-row m-3 justify-center items-center ">
                  Spearheaded a Runner-Up team in a hackathon, where we
                  developed a Smart Education project and various related
                  solutions.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Conducted thorough code reviews within the team, emphasizing
                  clarity and efficiency in the development process.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Enhanced code performance to optimize application response
                  times and ensure scalability.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Advocated for and enforced web accessibility standards across
                  the application, ensuring inclusivity and compliance.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Actively participated in an Agile-oriented environment,
                  effectively managing project schedules and utilizing available
                  resources for successful outcomes.
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 flex flex-row justify-center items-center ">
              <div className="relative">
                {isFullScreen2 ? (
                  <div
                    className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-90"
                    onClick={handleImageClick2}
                  >
                    <img
                      className="max-h-full max-w-full"
                      src={img2}
                      alt="Fullscreen Image"
                    />
                    <span className="rotate-90 absolute z-50 cursor-pointer hover:bg-[#ff50f0]  -left-12 top-1/2 transform -translate-y-1/2 bg-[#808080b4] px-2 py-1 rounded-lg text-white">
                      Click to Expand
                    </span>
                  </div>
                ) : (
                  <>
                    <img
                      className="drop-shadow-2xl shadow-2xl rounded-xl shadow-[#ffffff46] cursor-pointer"
                      src={img2}
                      onClick={handleImageClick2}
                    />
                    <span className="rotate-90 absolute z-50 cursor-pointer hover:bg-[#ff50f0]  -left-12 top-1/2 transform -translate-y-1/2 bg-[#808080b4] px-2 py-1 rounded-lg text-white">
                      Click to Expand
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="border-l-2 p-5 text border-b-2 rounded-bl-lg justify-around  border-[#f04aff] flex md:flex-row-reverse flex-col-reverse">
            <div className="md:w-1/2">
              <div className="flex flex-col m-5 font-bold text-[23px] md:items-start items-center ">
                <h1 className="text-[#6c43ff]">
                  Lead Full Stack Developer
                  <span id="span"> @Rajeshthan Police Hackathon 1.0</span>
                </h1>
                <h1>Sep 2023 - 2025</h1>
              </div>
              <ul className="md:text-start  text-center">
                <li className="flex flex-row m-3 justify-center items-center ">
                  Runner-up at Rajasthan Hackathon and participant at SIH
                  Hackathon, demonstrating problem-solving skills and teamwork.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Led development teams to success in various projects,
                  fostering collaboration and innovation.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Implemented cutting-edge technologies to optimize application
                  performance and ensure seamless user experiences.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Actively contributed to an Agile-driven environment,
                  coordinating project timelines and resource utilization
                  effectively.
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 flex flex-row justify-center items-center ">
              <div className="relative">
                {isFullScreen3 ? (
                  <div
                    className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-90"
                    onClick={handleImageClick3}
                  >
                    <img
                      className="max-h-full max-w-full"
                      src={img3}
                      alt="Fullscreen Image"
                    />
                    <span className="rotate-90 absolute z-50 cursor-pointer hover:bg-[#ff50f0]  -left-12 top-1/2 transform -translate-y-1/2 bg-[#808080b4] px-2 py-1 rounded-lg text-white">
                      Click to Expand
                    </span>
                  </div>
                ) : (
                  <>
                    <img
                      className="drop-shadow-2xl shadow-2xl rounded-xl shadow-[#ffffff46] cursor-pointer"
                      src={img3}
                      onClick={handleImageClick3}
                    />
                    <span className="rotate-90 absolute z-50 cursor-pointer hover:bg-[#ff50f0]  -left-12 top-1/2 transform -translate-y-1/2 bg-[#808080b4] px-2 py-1 rounded-lg text-white">
                      Click to Expand
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="border-r-2 p-5 text border-b-2 rounded-br-lg justify-around  border-[#45fff6] flex md:flex-row flex-col-reverse">
            <div className="md:w-1/2 ">
              <div className="flex flex-col m-5 font-bold text-[23px] md:items-end items-center  ">
                <h1 className="text-[#6c43ff]">
                  FullStack Dev Course (MERN Stack)
                  <span id="span"> @Udemy</span>
                </h1>
                <h1>Sep 2022 - Mar 2023</h1>
              </div>
              <ul className="md:text-end text-center ">
                <li className="flex flex-row m-3 justify-center items-center ">
                  Completed a comprehensive Full Stack Developer Course focusing
                  on the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Demonstrated proficiency in core development skills through
                  hands-on projects and practical exercises.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Gained expertise in building scalable and efficient web
                  applications using industry-standard technologies.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Developed a strong understanding of web development concepts,
                  including front-end and back-end development, database
                  management, and server-side scripting.
                </li>
                <li className="flex flex-row m-3 justify-center items-center ">
                  Acquired practical experience in deploying applications,
                  debugging code, and implementing best practices for software
                  development.
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 flex flex-row justify-center items-center ">
              <div className="relative">
                {isFullScreen4 ? (
                  <div
                    className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-90"
                    onClick={handleImageClick4}
                  >
                    <img
                      className="max-h-full max-w-full"
                      src={img4}
                      alt="Fullscreen Image"
                    />
                    <span className="rotate-90 absolute z-50 cursor-pointer hover:bg-[#ff50f0]  -left-12 top-1/2 transform -translate-y-1/2 bg-[#808080b4] px-2 py-1 rounded-lg text-white">
                      Click to Expand
                    </span>
                  </div>
                ) : (
                  <>
                    <img
                      className="drop-shadow-2xl shadow-2xl rounded-xl shadow-[#ffffff46] cursor-pointer"
                      src={img4}
                      onClick={handleImageClick4}
                    />
                    <span className="rotate-90 absolute z-50 cursor-pointer hover:bg-[#ff50f0]  -left-12 top-1/2 transform -translate-y-1/2 bg-[#808080b4] px-2 py-1 rounded-lg text-white">
                      Click to Expand
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
