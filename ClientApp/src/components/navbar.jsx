import React from "react";
import { useState } from "react";
import gitIcon from "../images/github white.png"

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="flex items-center text-white bg-skye-blue pl-10 py-5 text-lg ">
      <div className="min-w-[200px]">
        <a
          className="text-3xl "
          href="./"
        >
          Skye Renda
        </a>
      </div>

      <a
        className="pl-10  hidden md:block"
        href="./about"
      >
        About
      </a>
      <a
        className="pl-10  hidden md:block"
        href="./education"
      >
        Education
      </a>
      <a
        className="pl-10 hidden md:block"
        href="./workexperience "
      >
        Work Experience
      </a>
      <span className="w-3/5 md:hidden"></span>
      <div className="md:hidden">
        <button
          onClick={() => {
            toggleShowMenu();
          }}
        >
          <Menu></Menu>
        </button>

        {showMenu && <SlideOut toggleShowMenu={toggleShowMenu} />}
         </div>
          <div className=" hidden md:block absolute right-0 mr-8"><a href="https://github.com/SkyeRenda/skye-renda-website-.net"><img className="w-8 h-8" src={gitIcon} alt="icon for github" /></a></div> 
    </div>
  );
};

const Menu = () => {
  return (
    <div class="space-y-2 mr-2">
      <div class="w-8 h-0.5 bg-white"></div>
      <div class="w-8 h-0.5 bg-white"></div>
      <div class="w-8 h-0.5 bg-white"></div>
    </div>
  );
};

const SlideOut = (props) => {
  return (
    <div className="inline h-full w-3/5 absolute top-0 right-0 bg-solid-blue z-20">
      <button
        className="my-8 mx-2 absolute w-8 h-8 right-0 bg-back-close bg-cover"
        onClick={() => props.toggleShowMenu()}
      ></button>
      <div className="block pt-24">
        <div className="my-5">
          <a
            className=""
            href="./"
          >
            Skye Renda
          </a>
        </div>

        <div className="my-5">
          <a
            className=""
            href="./about"
          >
            About
          </a>
        </div>
        <div className="my-5">
          <a
            className=""
            href="./education"
          >
            Education
          </a>
        </div>
        <div className="my-5">
          <a
            className=""
            href="./workexperience "
          >
            Work Experience
          </a>
              </div>
              <div className=" inline-block m-auto"><a href="https://github.com/SkyeRenda/skye-renda-website-.net"><img className="w-8 h-8" src={gitIcon} alt="icon for github" /></a></div> 
      </div>
    </div>
  );
};
