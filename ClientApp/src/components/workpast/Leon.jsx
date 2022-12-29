import React from "react";
import Fade from "react-reveal/Fade";

const Leon = () => {
  return (
    <Fade clear>
      <div className="my-2 text-left bg-back-electricity bg-cover bg-center lg:mr-10 text-white py-10 px-10  max-h-full overflow-auto">
        <h1 className="text-5xl my-5">Electrician Assistant</h1>
        <h2 className="text-4xl my-1 ">Leon Ackerman</h2>
        <h3 className="text-3xl">[2016-2017]</h3>

        <p className="text-3xl my-24">
          City: Witbank <br />
          Country: South Africa
        </p>

        <p className="text-3xl ">
          Assisting an electrician for just over a year was the beginning of my
          working career. I learned some basic business elements and customer
          management. I also developed a do it yourself attitude as many of the
          challenges we had to overcome could only be done so by innovation and
          problem solving.
        </p>
      </div>
    </Fade>
  );
};

export default Leon;
