import {
  AiOutlineStrikethrough,
  AiFillMail,
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import React from "react";
import "../css/about.css";
import mine2 from "../assets/img/mine2.png";

export default function about() {
  return (
    <div
      id="about"
      className=" container md:flex  justify-between   flex-row my-10 text-white mx-auto"
    >
      <div className="  flex m-2 md:w-[50%]    flex-col">
        <h1
          id="textstyle"
          className="font-bold  text-center  text-[40px] text-[#80808098] "
        >
          About Me{" "}
        </h1>
        <div className=" p-1 my-10 float-left flex">
          <div className="float-left  ">
            <h1 className="font-thin text-center text-[18px] ">
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

            <h1 className="font-thin text-center text-[18px] my-4">
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

            <div className="flex flex-col overflow-hidden  my-8">
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

              <div className="flex flex-col  my-2 ">
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

              <div className="flex flex-col  my-2 ">
                <h1 className="font-[bold] float-left flex text-[20px] border-b-2 border-[#6c43ff]  my-8">
                  Social Media:
                </h1>

                <div className=" flex flex-row  justify-center items-center space-x-8">
                  <div className="">
                    <div>
                      <div class="tooltip-containerli">
                        <div class="tooltipli">
                          <div class="profileli">
                            <div class="userli">
                              <div class="imgli">Li</div>
                              <div class="detailsli">
                                <div class="nameli">Shivraj</div>
                                <div class="usernameli">@ShivrajSingh</div>
                              </div>
                            </div>
                            <div class="aboutli">200+ Connections</div>
                          </div>
                        </div>
                        <div class="textli">
                          <a
                            class="iconli"
                            target="_blank"
                            href="https://www.linkedin.com/in/shivraj-singh-7bb9411b9/"
                          >
                            <div class="layerli">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span class="fab fa-linkedin">
                                <svg viewBox="0 0 448 512" height="1em">
                                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                </svg>
                              </span>
                            </div>
                            <div class="textli">LinkedIn</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* insta  */}
                  <div className=" ">
                    <div class="tooltip-containerin">
                      <div class="tooltipin">
                        <div class="profilein">
                          <div class="userin">
                            <div class="imgin">In</div>
                            <div class="detailsin">
                              <div class="namein">Shivraj</div>
                              <div class="usernamein">@developer_shiv_</div>
                            </div>
                          </div>
                          <div class="aboutin">500+ Followers</div>
                        </div>
                      </div>
                      <div class="textin">
                        <a
                          class="iconin"
                          target="_blank"
                          href="https://www.instagram.com/developer_shiv_"
                        >
                          <div class="layerin">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="instagramSVG">
                              <svg
                                fill="white"
                                class="svgIcon"
                                viewBox="0 0 448 512"
                                height="1.5em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                              </svg>
                            </span>
                          </div>
                          <div class="textin">Instagram</div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* github  */}
                  <div className="tooltip-containergit">
                    <div className="tooltipgit">
                      <div className="profilegit">
                        <div className="usergit">
                          <div className="imggit">Gi</div>
                          <div className="detailsgit">
                            <div className="namegit">Shivraj</div>
                            <div className="usernamegit">@shivrajsingh</div>
                          </div>
                        </div>
                        <div className="aboutgit">100+ Repos</div>
                      </div>
                    </div>
                    <div className="textgit">
                      <a
                        className="icongit"
                        target="_blank"
                        href="https://github.com/shivrajsingh-sde"
                      >
                        <div className="layergit">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span className="gitSVG">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="100"
                              height="100"
                              viewBox="0 0 50 50"
                            >
                              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39C0,39,0,39,0,39c-0.6,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25C2,35.164,8.63,43.804,17.791,46.836z"></path>
                            </svg>
                          </span>
                        </div>
                        <div className="textgit">Github</div>
                      </a>
                    </div>
                  </div>

                  {/* twitter  */}
                  <div class="tooltip-container-twitter">
                    <div className="tooltip-twitter">
                      <div className="profile-twitter">
                        <div className="user-twitter ">
                          <div className="img-twitter">X</div>
                          <div className="details-twitter">
                            <div className="name-twitter">Shivraj</div>
                            <div className="username-twitter">
                              @shivrajsingh
                            </div>
                          </div>
                        </div>
                        <div className="about-twitter">100+ Conn.</div>
                      </div>
                    </div>
                    <div class="text-twitter">
                      <a
                        class="icon-twitter"
                        target="_blank"
                        href="https://twitter.com/Gamer20042004"
                      >
                        <div class="layer-twitter">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span class="twitterSVG">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="100"
                              height="100"
                              viewBox="0 0 50 50"
                            >
                              <path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"></path>
                            </svg>
                          </span>
                        </div>
                        <div class="text-twitter">Twitter</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:m-5   justify-center items-center  md:w-[50%]  flex">
        <div className="">
          <div class="boxside">
            <span></span>
            <div class="contentside">
              <img
                src={mine2}
                className="  rounded-xl border-4 md:translate-x-0 translate-x-10 scale-105 hover:scale-100 duration-300 ease-in-out   "
              ></img>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
