import React from "react";
import Bio from "./assets/win95Icons/bio.png";
import Resume from "./assets/win95Icons/resume.png";
import Photos from "./assets/win95Icons/photos.png";
import logo from "./logo.svg";
import { useState,useEffect } from "react";
import { Biography } from "./components/Biography";


const Win95Icons = {
  bio: "./assets/win95Icons/bio.png",
  resume: "./assets/win95Icons/resume.png",
  photos: "./assets/win95Icons/photos.png",
};

function App() {

  const [bioOpen, SetBioOpen] = useState<boolean>(false)




  return (
    <div className="h-[950px] ">
      {
        bioOpen ? <Biography /> : ""
      }
      {/* <Biography /> */}
      <ul className="p-10  w-20  flex flex-col gap-8">
        <li className="w-20 hover:bg-gray-600">
          <button className="" onClick={() => bioOpen ? SetBioOpen(false): SetBioOpen(true)}>
            <img className="ml-3 w-[30px] h-[30px]" src={Bio} alt="Bio" />
            <p className="pt-2  font-msserif font-light text-white"> Biography</p>
          </button>
        </li>
        <li className="w-16 hover:bg-gray-600">
          <button>
            <img className="ml-3 w-[30px] h-[30px]" src={Resume} alt="Resume" />
            <p className="pt-2 font-msserif font- text-white">Resume</p>
          </button>
        </li>
        <li className="w-16 hover:bg-gray-600">
          <button>
            <img className="ml-3 w-[30px] h-[30px]" src={Photos} alt="Photos" />
            <p className="pt-2 font-msserif font-light text-white">Photos</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
