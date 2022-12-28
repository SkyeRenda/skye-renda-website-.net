import React from "react";

export const Education = (props) => {
  return (
    <div className="h-screen">
      <div className="bg-back-unisa bg-cover bg-center text-right p-20 ">
        <h1 className="text-5xl">Bachelor of Science, Computing</h1>
        <h2 className="text-4xl">University of South Africa</h2>
        <h3 className="text-3xl">[2017-2021]</h3>
        <h3 className="text-3xl py-10">
          Address: Unisa Muckleneuk Campus Preller Street, 0002 Pretoria (South
          Africa) <br /> Website:{" "}
          <a
            href="https://www.unisa.ac.za"
            className="underline hover:text-skye-blue"
          >
            https://www.unisa.ac.za
          </a>
        </h3>
      </div>
      <div className="bg-back-drone bg-cover bg-center text-left p-20 my-10">
        <h1 className="text-5xl">Drone Pilot License</h1>
        <h2 className="text-4xl">Cranfield Aviation Academy</h2>
        <h3 className="text-3xl">[2019]</h3>
        <h3 className="text-3xl py-10">
          Address: 90 4th Road, 2055 Fourways (South Africa) <br /> Website:{" "}
          <a
            href="https://www.cranfield.co.za"
            className="underline hover:text-skye-blue"
          >
            https://www.cranfield.co.za
          </a>
        </h3>
      </div>
      <div className="bg-back-pao bg-cover bg-center text-right p-20 my-10">
        <h1 className="text-5xl">Private Pilot License</h1>
        <h2 className="text-4xl">Witbank Aeronautical Association</h2>
        <h3 className="text-3xl">[2013]</h3>
        <h3 className="text-3xl py-10">
          Address: Witbank Airfield, eMalahleni (South Africa)
        </h3>
      </div>
    </div>
  );
};

export default Education;
