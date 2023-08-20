import React, { useState, useEffect } from "react";
import Header from "../header";
import Main from "../main";
import About from "../about";
import Work from "../work";
import Project from "../project";
import Other from "../other";
import Contact from "../contact";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const trackMouse = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", trackMouse);
    return () => {
      document.removeEventListener("mousemove", trackMouse);
    };
  }, []);

  return (
    <div>
      <div>
        <Header />
        <Main />
        <About />
        <Work />
        <Project />
        <Other />
        <Contact />
        <div className="fixed top-0 left-0 z-50 pointer-events-none">
          <div
            className="star-tracker absolute  rounded-full"
            style={{
              top: `${mousePosition.y}px`,
              left: `${mousePosition.x}px`,
            }}
          ></div>
          <div className="glitter"></div>
          <div className="glitter"></div>
          <div className="glitter"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
