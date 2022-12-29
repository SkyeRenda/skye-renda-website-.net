import React from "react";
import Fade from "react-reveal/Fade";

const Precon = () => {
  return (
    <Fade clear>
      <div className=" my-2 text-left bg-back-server bg-cover bg-center lg:mr-10 text-white py-10 px-10  max-h-full overflow-auto">
        <h1 className="text-5xl my-5">IT and Business Solutions Consultant</h1>
        <h2 className="text-4xl my-1 ">Precon Survey Services</h2>
        <h3 className="text-3xl">[05/2022 - Current]</h3>

        <p className="text-3xl my-24">
          City: Middelburg <br />
          Country: South Africa
        </p>

        <p className="text-3xl ">
          I act as an in-house full-stack developer, innovating and improving
          all the systems within the business. This means managing a database
          for business information and developing software to analyse and
          present the information. In addition, I create scripts to process and
          deliver information on a daily basis. My responsibilities include
          server management, security and access, and IT support.
        </p>
      </div>
    </Fade>
  );
};

export default Precon;
