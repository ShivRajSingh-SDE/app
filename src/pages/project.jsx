import React from "react";
import img1 from "../assets/img/Screenshot 2023-10-21 142412.png";
import img2 from "../assets/img/chatbot.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../css/project.css";

export default function project() {
  const items = [
    {
      div: {
        h1: ["Smart Education Based Web App"],
        Tech: [
          "React.Js",
          "Express.js",
          "Tailwind",
          "MongoDB",
          "LLM Api",
          "Node.Js",
        ],
        code: "Git Link",
        live: "Git Link",

        commit: "12",

        bgImg:
          "https://images.unsplash.com/photo-1710481225805-0789e9ad9aac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      div: {
        h1: ["Smart LLM Based Chat Bot"],
        Tech: [
          "React.Js",
          "Express.js",
          "Tailwind",
          "MongoDB",
          "LLM Api",
          "Node.Js",
          "Gpt3.5Turbo",
        ],
        code: "Git Link",
        live: "Git Link",
        commit: "8",

        bgImg:
          "https://images.unsplash.com/photo-1710481225805-0789e9ad9aac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      div: {
        h1: ["Smart E-com site"],
        Tech: [
          "React.Js",
          "Express.js",
          "Tailwind",
          "MongoDB",
          "Mui",
          "Node.Js",
        ],
        code: "Git Link",
        commit: "32",
        live: "https://www.instagram.com/",
        bgImg:
          "https://images.unsplash.com/photo-1710481225805-0789e9ad9aac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  ];

  return (
    <div id="Project" className=" max-w-[80%] mx-auto">
      <br />
      <br />
      <div id="textstyle">
        <h1 className=" text-3xl border-l-2 font-bold border-[#389cca] p-2  text-start my-10">
          Projects
        </h1>
        <br />
        <br />
      </div>
      <div className=" flex flex-wrap justify-around space-y-4">
        {items.map((item, i) => (
          <div class="card1" key={i}>
            <div
              class="top-section"
              style={{
                backgroundImage: `url(${item.div.bgImg})`,
                backgroundSize: "cover",
              }}
            >
              <div class="border"></div>
              <div class="icons relative">
                <div class="logo"></div>
                <div class=" absolute   flex flex-row justify-center items-center ">
                  <a href="https://www.instagram.com/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      className=" bg-white rounded-3xl hover:scale-125 duration-300 ease-in-out p-1 ml-5"
                      height="25"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="bottom-section">
              <span class="title">{item.div.h1}</span>
              <div class="row row1 flex flex-col">
                <div className=" flex flex-row">
                  <div class="item">
                    <span class="big-text">MERN</span>
                    <span class="regular-text">Tech Stack</span>
                  </div>
                  <div class="item">
                    <span class="big-text">100%</span>
                    <span class="regular-text">Free for use</span>
                  </div>
                  <div class="item">
                    <span class="big-text">{item.div.commit}</span>
                    <span class="regular-text">Commits</span>
                  </div>
                </div>

                <div className="flex flex-row  mt-5 justify-between items-center">
                  <button className="cv">
                    <a target="_blank" href={item.div.code}>
                      Code
                    </a>
                  </button>
                  <button className="cv">
                    <a target="_blank" href={item.div.live}>
                      Live
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
