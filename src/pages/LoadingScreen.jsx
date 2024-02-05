import React from "react";
import Qr from "../assets/img/QR.png";

const LoadingScreen = () => {
  return (
    <div className="loading-screen  h-[100vh]">
      <div className="spinner">
        <img
          className="spinner-element h-[30vh]"
          src="https://cdn-icons-png.flaticon.com/512/1157/1157109.png"
        ></img>
        <img className=" h-[20vh]" src={Qr}></img>

        <img
          className="spinner-element h-[30vh]"
          src="https://cdn-icons-png.flaticon.com/512/1157/1157109.png"
        ></img>
      </div>
    </div>
  );
};

export default LoadingScreen;
