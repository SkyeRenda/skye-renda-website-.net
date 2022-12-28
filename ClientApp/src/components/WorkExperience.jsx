import React, { useState } from "react";
import Leon from "./workpast/Leon";
import Precon from "./workpast/Precon";
import Vidblast from "./workpast/Vidblast";
import SkydiveTandem from "./workpast/SkydiveTandem";
import Fade from "react-reveal/Fade";

export const WorkExperience = () => {
  const [selectedWork, setSelectedWork] = useState("precon");

  function returnSelectedWork() {
    switch (selectedWork) {
      case "precon":
        return <Precon></Precon>;

      case "leon":
        return <Leon></Leon>;

      case "skydivetandem":
        return <SkydiveTandem></SkydiveTandem>;

      case "vidblast":
        return <Vidblast></Vidblast>;

      default:
        return <Precon></Precon>;
    }
  }

  return (
    <div className=" lg:pt-20 h-full lg:h-screen flex ">
      <div className="hidden lg:grid w-2/5 grid-cols-2 mt-10 text-white">
        <div className="row-start-1 col-start-1  border-r-black border-r-4"></div>
        <div className="flex align-middle col-start-2 ">
          <span className="h-1 w-10 border-2 my-auto border-black"></span>
          <button
            className=" bg-skye-blue my-auto w-20 h-20 rounded-full"
            onClick={() => setSelectedWork("precon")}
          >
            2022
          </button>
        </div>
        <div className="float-right flex items-left align-middle row-start-2 col-start-1 border-r-black border-r-4">
          <button
            className=" bg-skye-blue my-auto ml-auto w-20 h-20 rounded-full "
            onClick={() => setSelectedWork("vidblast")}
          >
            2019
          </button>
          <span className="h-1 w-10 border-2 my-auto border-black"></span>
        </div>
        <div className="row-start-3 col-start-1  border-r-black border-r-4"></div>
        <div className=" flex align-middle row-start-3 col-start-2">
          <span className="h-1 w-10 border-2 my-auto border-black"></span>
          <button
            className=" bg-skye-blue  my-auto  w-20 h-20 rounded-full "
            onClick={() => setSelectedWork("skydivetandem")}
          >
            2017
          </button>
        </div>

        <div className=" right-0 flex align-middle row-start-4 col-start-1 border-r-black border-r-4">
          <button
            className="bg-skye-blue  my-auto ml-auto w-20 h-20 rounded-full"
            onClick={() => setSelectedWork("leon")}
          >
            2016
          </button>
          <span className="h-1 w-10 border-2 my-auto border-black"></span>
        </div>
          </div>
          <Fade right><div className="hidden lg:block lg:w-3/5 lg:m-auto">
              {returnSelectedWork()}
          </div></Fade>
          
      
      <div className="lg:hidden">
              <Fade clear><Precon></Precon></Fade>
              <Fade clear ><Vidblast></Vidblast></Fade>
              <Fade clear ><SkydiveTandem></SkydiveTandem></Fade>
              <Fade clear><Leon></Leon></Fade>
      </div>
    </div>
  );
};

export default WorkExperience;
