import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import axios from "axios";
import { AiOutlineSlackSquare, AiOutlineSlack } from "react-icons/ai";
import "../css/header.css";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const [userProfile, setUserProfile] = useState(null);
  console.log(userProfile);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      axios
        .get(`http://localhost:5454/api/user/${email}`)
        .then((response) => {
          setUserProfile(response.data);
          console.log("res dta ----", response.data);
        })

        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="header-container 
     md:max-w-[90%] mx-auto md:p-3 bg-[#00000027] shadow-[#e771ff34] backdrop-filter backdrop-blur-lg bg-opacity-40  sticky z-50 top-0 flex justify-between items-center duration-300 shadow rounded-br-3xl rounded-bl-3xl"
    >
      <a href="/">
        <div className="logo   p-2 rounded-lg">
          {/* <img src={logo} className="h-[40px]" alt="Logo" /> */}
          <h1 className="text-[30px]  text-white">𝕻𝖔𝖗𝖙𝖋𝖔𝖑𝖎𝖔</h1>
        </div>
      </a>
      {toggle ? (
        <AiOutlineSlackSquare
          onClick={toggleMenu}
          className="md:hidden block mr-3 md:text-[50px] text-[30px] text-white cursor-pointer "
        />
      ) : (
        <AiOutlineSlack
          onClick={toggleMenu}
          className="md:hidden block mr-3 md:text-[50px] text-[30px] text-white cursor-pointer "
        />
      )}

      <ul className="hidden md:flex text-white cursor-pointer  justify-center items-center flex-row gap-5 text-[16px] font-bold">
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
        <button className="cv ml-5">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1q4v0DQFQah3rBiRzL0-VRezWob5miEC3/view"
          >
            Resume
          </a>
        </button>
      </ul>

      {/* mobile  */}
      <ul
        className={`responsive md:hidden text-white fixed w-[100%] h-screen  top-16 bg-[#000000d8] shadow-[#e771ff34] backdrop-filter backdrop-blur-lg bg-opacity-40  justify-center items-center flex-row gap-5 text-[16px] font-bold ${
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
        <li className=" text-center">
          <button onClick={toggleMenu} className="cv ">
            <a
              onClick={toggleMenu}
              href="https://drive.google.com/file/d/1q4v0DQFQah3rBiRzL0-VRezWob5miEC3/view"
            >
              Resume
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
