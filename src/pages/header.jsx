import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import {
  AiOutlineHolder,
  AiOutlineQrcode,
  AiTwotoneAlert,
} from "react-icons/ai";
import { Switch } from "@material-tailwind/react";
import theme from "@material-tailwind/react/theme";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const theme = () => {
    const body = document.querySelector("body");
    const header = document.querySelector("#header");
    const toggle = document.querySelector("#toggle");
    const currentColor = body.style.backgroundImage;
    const newColor = currentColor
      ? ""
      : "linear-gradient(#000000,rgb(0, 0, 0))";
    const newColor1 = currentColor
      ? ""
      : "linear-gradient(#000000,rgb(0, 0, 0))";
    const newColor2 = currentColor
      ? ""
      : "linear-gradient(#01a2b8a2,rgba(8, 201, 191, 0.452))";

    body.style.backgroundImage = newColor;
    header.style.backgroundImage = newColor1;
    toggle.style.backgroundImage = newColor2;
  };

  const rotate = () => {
    const toggle = document.querySelector("#toggle");
    const trans = toggle.style.transform;
    const newtrans = trans ? "" : "rotate(360deg)";

    toggle.style.transform = newtrans;
  };

  return (
    <div
      id="header"
      className="header-container  sticky top-0 flex justify-between text-white duration-300 shadow-2xl rounded-br-3xl rounded-bl-3xl bg-[#282847d0] max-w-[1230px] mx-auto flex-row p-3"
    >
      <div className="logo border-[#61dafb] border-2 rounded-lg">
        <img src={logo} className="h-[50px]" alt="Logo" />
      </div>

      <div className=" justify-center items-center  translate-y-5">
        <AiTwotoneAlert
          onClick={theme}
          onMouseEnter={rotate}
          className=" duration-300 ease-in-out text-[30px] rounded-3xl"
          id="toggle"
        />
      </div>
      <div className="menu justify-center items-center flex">
        <ul className="hidden  md:flex flex-row gap-3 text-white justify-center items-center">
          <li className="menu-item hover:border-b-2 border-[#61dafb] p-1 hover:scale-110 m-2 ease-in-out duration-200">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-[#61dafb] font-bold">1. </span>About
            </Link>
          </li>
          <li className="menu-item hover:border-b-2 border-[#61dafb] p-1 hover:scale-110 m-2 ease-in-out duration-200">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-[#61dafb] font-bold">2. </span>Experience
            </Link>
          </li>
          <li className="menu-item hover:border-b-2 border-[#61dafb] p-1 hover:scale-110 m-2 ease-in-out duration-200">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-[#61dafb] font-bold">3. </span>Projects
            </Link>
          </li>
          <li className="menu-item hover:border-b-2 border-[#61dafb] p-1 hover:scale-110 m-2 ease-in-out duration-200">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-[#61dafb] font-bold">4. </span>Contact
            </Link>
          </li>

          <li className="menu-item hover:border-b-2 border-[#61dafb] p-1 border-[#61dafb] m-2 border-2 hover:text-black hover:bg-[#61dafb] rounded-xl p-2 hover:scale-110 ease-in-out duration-200">
            <a href="https://drive.google.com/file/d/1-yEFuGpNKs_I4T8jfGcyjwh7UFCYblhX/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>

        <ul
          className={`fixed md:hidden top-20 bg-[#61dafb] w-[100%] text-black font-bold ${
            toggle ? "right-0" : "right-[-100%]"
          } h-[100%] gap-3 text-[white] justify-center items-center`}
        >
          <li className="menu-item p-3 w-full hover:scale-110 m-2 ease-in-out duration-200">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-[#61dafb] font-bold">1. </span>About
            </Link>
          </li>
          <li className="menu-item p-3 hover:scale-110 m-2 ease-in-out duration-200">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-[#61dafb] font-bold">2. </span>Experience
            </Link>
          </li>
          <li className="menu-item p-3 hover:scale-110 m-2 ease-in-out duration-200">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-[#61dafb] font-bold">3. </span>Projects
            </Link>
          </li>
          <li className="menu-item p-3 hover:scale-110 m-2 ease-in-out duration-200">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="text-[#61dafb] font-bold">4. </span>Contact
            </Link>
          </li>
          <li className="menu-item p-2 translate-x-3 hover:scale-110 m-2 ease-in-out duration-200">
            <a href="https://drive.google.com/file/d/1-yEFuGpNKs_I4T8jfGcyjwh7UFCYblhX/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>

        <div className="md:hidden">
          {toggle ? (
            <AiOutlineHolder
              onClick={toggleMenu}
              className="text-[#61dafb] text-3xl cursor-pointer block"
            />
          ) : (
            <AiOutlineQrcode
              onClick={toggleMenu}
              className="text-[#61dafb] text-3xl cursor-pointer block"
            />
          )}
        </div>
      </div>
    </div>
  );
}
