import React from "react";
import "../css/contact.css";

export default function contact() {
  return (
    <div
      id="contact"
      className="max-w-[1300px] mx-auto justify-center items-center my-5 flex flex-col h-[80vh]"
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className=" text-[50px] text-[silver]">What's Next?</h1>
      <div className=" justify-center items-center flex flex-col">
        <h1 className=" m-5 text-[25px]  text-[silver]">Get In Touch</h1>

        <div class="form-container">
          <form class="form">
            <div class="form-group">
              <label for="email">Company Email</label>
              <input type="text" id="email" name="email" required="" />
            </div>
            <div class="form-group">
              <label for="textarea">How Can We Help You?</label>
              <textarea
                name="textarea"
                id="textarea"
                rows="10"
                cols="50"
                required=""
              >
                {" "}
              </textarea>
            </div>
            <button class="form-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <svg
        className=" hover:scale-105 duration-300 ease-in-out  bottom-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#6c43ff]"
          fill-opacity="0.2"
          d="M0,192L60,160C120,128,240,64,360,85.3C480,107,600,213,720,224C840,235,960,149,1080,122.7C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
