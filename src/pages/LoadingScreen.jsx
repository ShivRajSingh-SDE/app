import React from "react";
import "../css/loading.css";

const LoadingScreen = () => {
  return (
    <div className="  h-[100vh]">
      <div class="pyramid-loader">
        <div class="wrapper">
          <span class="side side1"></span>
          <span class="side side2"></span>
          <span class="side side3"></span>
          <span class="side side4"></span>
          <span class="shadow"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
