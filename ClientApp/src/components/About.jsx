import React from "react";
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import skyeProfile from "../images/skye-profile.png";

export const About = (props) => {
  return (
    <div className="p-16 md:h-screen h-full">
      <h1 className="text-8xl md:mb-10">Skye Renda</h1>
      <h2 className="text-4xl md:mt-10 mt-8 ">
        "The only person you are destined to become is the person you decide to
        be."
      </h2>
      <h3 className="italic mb-8 md:mb-10">-Ralph Waldo Emerson</h3>
      <div className=" md:my-20 md:flex place-content-center text-xl">
        <div className="md:w-2/5 md:mr-10 text-left">
          <p>
            I am a software developer looking to expand my skill set and launch
            my career in the computing industry. <br /> <br />
            On a mission to make my mark on software development, I have studied
            for a Bachelor of Science in Computing. Now that it is complete, I
            am looking to move my career forward with powerful strides. <br />
            A strong passion for computers and technology fuelled my
            self-directed learning and development. <br /> <br />
            With communication, time management, self-discipline, and an
            excellent work ethic, I am an asset to any organisation looking to
            expand its team with dedicated, hard-working personnel.
          </p>
        </div>
        <div className="relative md:float-right circle border-2 border-black rounded-full  aspect-square m-10 md:m-0 md:h-[250px] md:w-[250px] bg-gray-500">
          <img
            src={skyeProfile}
            alt="profile of Skye Renda"
          ></img>
        </div>
        <div className="md:w-2/5 align-top md:ml-10 text-left">
          <h3 className="font-bold">Languages</h3>
          <p>python | web-development | C# | C++ | react</p>
          <h3 className="mt-5 font-bold">Skills</h3>
          <p>strong teamwork | communication | learnability</p>
          <h3 className="mt-5 font-bold">Get in touch...</h3>
          <p>
            Mobile: 072 967 1732 <br />
            Email: skyerenda@hotmail.com
          </p>
          <div className="mt-5 flex">
            <a href="https://www.facebook.com/skye.renda">
              <img
                src={facebook}
                className="w-10 "
                alt="facebook"
              />
            </a>
            <a href="https://www.facebook.com/skye.renda">
              <img
                src={github}
                className="w-10 mx-2"
                alt="linked in"
              />
            </a>
            <a href="https://www.facebook.com/skye.renda">
              <img
                src={linkedin}
                className="w-10"
                alt="linked in"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
