import React, { useContext } from "react";
import BioIcon from "./assets/win95Icons/bio.png";
import ResumeIcon from "./assets/win95Icons/resume.png";
import { Resume } from "./components/Resume";
import Photos from "./assets/win95Icons/photos.png";
import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { Biography } from "./components/Biography";
import { AppContext, AppProvider } from "./context/AppContext";
import { FooterNav } from "./components/Footer";

const Win95Icons = {
  bio: "./assets/win95Icons/bio.png",
  resume: "./assets/win95Icons/resume.png",
  photos: "./assets/win95Icons/photos.png",
};

function App() {
  const { BioData, ResumeData } = useContext(AppContext)!;

  if (!BioData || !ResumeData) {
    throw new Error("App.tsx must be used within a AppProvider");
  }

  return (
    <div className="h-[950px]">
      {BioData.isBioOpen && !BioData.isBioResumed ? <Biography /> : ""}
      {ResumeData.isResumeOpen ? <Resume /> : ""}
      <ul className="p-10  w-20  flex flex-col gap-8">
        <li className="w-20 hover:bg-gray-600">
          {/* TODO:remeber to check on resumed window */}
          <button
            className=""
            onClick={() => {
              BioData.isBioResumed
                ? BioData.setIsBioResumed(false)
                : BioData.setIsBioOpen(true);
            }}
          >
            <img className="ml-3 w-[30px] h-[30px]" src={BioIcon} alt="Bio" />
            <p className="pt-2  font-msserif font-light text-white">
              {" "}
              Biography
            </p>
          </button>
        </li>
        <li className="w-16 hover:bg-gray-600">
          <button
            onClick={() =>
              ResumeData.isResumeOpen
                ? ResumeData.setIsResumeOpen(false)
                : ResumeData.setIsResumeOpen(true)
            }
          >
            <img
              className="ml-3 w-[30px] h-[30px]"
              src={ResumeIcon}
              alt="Resume"
            />
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
      <FooterNav />
    </div>
  );
}

export default App;
