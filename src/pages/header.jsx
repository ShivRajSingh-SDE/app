import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/img/logo.png";
import { AiOutlineSlackSquare, AiOutlineSlack } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="header-container 
     max-w-[1250px] mx-auto p-3 bg-[#00000027] shadow-[#b7a9eb63] border-2 sticky z-50 top-0 flex justify-between items-center duration-300 shadow-2xl rounded-br-3xl rounded-bl-3xl"
    >
      <a href="/">
        <div className="logo  border-2 p-2 rounded-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Logo_CODE.svg/1280px-Logo_CODE.svg.png"
            className="h-[30px] "
            alt="Logo"
          />
          {/* <h1 className="text-[20px] text-[#808080ce]">Shiv</h1> */}
        </div>
      </a>
      {toggle ? (
        <AiOutlineSlackSquare
          onClick={toggleMenu}
          className="md:hidden block text-[50px] text-[#000000]"
        />
      ) : (
        <AiOutlineSlack
          onClick={toggleMenu}
          className="md:hidden block text-[50px] text-[#000000]"
        />
      )}

      <ul className="hidden md:flex text-[#000000] justify-center items-center flex-row gap-5 text-[16px] font-bold">
        <li className="hover:scale-110 duration-300 ease-in-out hover:text-[#4f47c5]">
          <Link to="main" spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110 duration-300 ease-in-out hover:text-[#4f47c5]">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            About Me
          </Link>
        </li>
        <li className="hover:scale-110 duration-300 ease-in-out hover:text-[#4f47c5]">
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="hover:scale-110 duration-300 ease-in-out hover:text-[#4f47c5]">
          <Link
            to="Project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex bg-[white] rounded-2xl text-[black] hover:text-[#4f47c5]">
          <a href="https://drive.google.com/file/d/1q4v0DQFQah3rBiRzL0-VRezWob5miEC3/view">
            Resume
          </a>
        </li>
      </ul>

      <ul
        className={`responsive md:hidden text-black fixed w-[100%] h-[100%] top-20 bg-white justify-center items-center flex-row gap-5 text-[16px] font-bold ${
          toggle ? "left-[0]" : "left-[-100%]"
        }`}
      >
        <li
          onClick={toggleMenu}
          className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex hover:text-[#4f47c5]"
        >
          <Link
            onClick={toggleMenu}
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex hover:text-[#4f47c5]"
        >
          <Link
            onClick={toggleMenu}
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex hover:text-[#4f47c5]"
        >
          <Link
            onClick={toggleMenu}
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex hover:text-[#4f47c5]"
        >
          <Link
            onClick={toggleMenu}
            to="Project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="p-3 hover:scale-110 duration-300 ease-in-out justify-center flex bg-[white] rounded-2xl text-[black] hover:text-[#4f47c5]"
        >
          <a
            onClick={toggleMenu}
            href="https://drive.google.com/file/d/1q4v0DQFQah3rBiRzL0-VRezWob5miEC3/view"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
