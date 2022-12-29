import React from "react";
import Fade from "react-reveal/Fade";

const SkydiveTandem = () => {
  return (
    <Fade clear>
      <div className="my-2 text-left bg-back-skydiving bg-cover bg-center lg:mr-10 text-white py-10 px-10  max-h-full overflow-auto">
        <h1 className="text-5xl my-5">Video Editor</h1>
        <h2 className="text-4xl my-1 ">Skydive Tandem Johannesburg</h2>
        <h3 className="text-3xl">[2017-2019]</h3>

        <p className="text-3xl my-24">
          City: Witbank <br />
          Country: South Africa
        </p>

        <p className="text-3xl ">
          I edited videos for skydiving tourists based at the airfield. This
          meant dealing with difficult customers, who wanted personalised
          videos, but also keeping a pace to ensure everyone received their
          videos with in an hour after landing.
        </p>
      </div>
    </Fade>
  );
};

export default SkydiveTandem;
