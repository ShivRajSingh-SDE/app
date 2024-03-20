import React, { useState, useEffect } from "react";
import Header from "../header";
import Main from "../main";
import About from "../about";
import Work from "../work";
import Project from "../project";
import Other from "../other";
import Contact from "../contact";

import LoadingScreen from "../LoadingScreen";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const trackMouse = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", trackMouse);

    setTimeout(() => {
      setLoading(false);
    });

    return () => {
      document.removeEventListener("mousemove", trackMouse);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Header />
      <Main />
      <About />
      <Work />
      <Project />
      <Contact />
      <div className="fixed hidden md:flex top-0 left-0 z-50 pointer-events-none">
        <div
          className="hidden md:flex star-tracker absolute rounded-full"
          style={{
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
          }}
        ></div>
        <div
          className="glitter"
          style={{
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
          }}
        >
          <span
            role="img"
            aria-label="emoji"
            style={{ fontSize: "32px" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
