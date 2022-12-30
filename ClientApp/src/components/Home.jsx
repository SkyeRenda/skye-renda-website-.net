import React from "react";
import skyeCutImage from "../images/skye-cut.png";

export const Home = () => {
  return (
    <div className=" relative flex pl-74 md:pt-[240px] pt-10">
      <img
        src={skyeCutImage}
        className="w-[501px] pl-10 hidden md:inline-block"
        alt="skye"
      />
      <div className="md:inline-block snap-start">
        <h3 className="text-3xl md:text-4xl text-left pl-10">Hello, I am</h3>
        <h1 className="text-8xl text-left pl-10 pt-5 mt-2 md:mt-0">
          Skye Renda
        </h1>
        <h2 className="text-3xl md:text-4xl text-left pl-10 pt-5 mt-2 md:mt-0">
          Software Developer
        </h2>
        <h2 className="text-3xl md:text-4xl text-left pl-10 pt-5 mt-2 md:mt-0">
          Business Analyst
        </h2>
        <a
          href="/api/fileprocessing/download"
          target="_blank"
        >
          <button className="my-20 md:mt-20 ml-10 flex text-white bg-skye-blue text-4xl text-left py-5 px-10">
            Download CV
          </button>
        </a>
        <img
          src={skyeCutImage}
          className="w-[501px] pl-10 md:hidden inline-block"
          alt="skye"
        />
      </div>
    </div>
  );
};
