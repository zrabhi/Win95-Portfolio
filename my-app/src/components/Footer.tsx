import { useContext, useState } from "react";
import bio from "../assets/win95Icons/bio.png";
import sideBar from "../assets/sidebar-image.png";
import ResumeIcon from "../assets/win95Icons/resume.png";

import win95Icon from "../assets/win95.png";
import { AppContext } from "../context/AppContext";


// TODO: CREATE REAL TIME DATE AND TIME RENDERING
export const FooterNav = () => {
  const [time,setTime] = useState<string>(new Date().toLocaleTimeString())
  const [date, setDate] = useState<string>(new Date().toLocaleDateString())

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const { BioData, ResumeData } = useContext(AppContext)!;
  if (!BioData || !ResumeData)
    throw new Error("Footer.tsx must be used within a AppProvider");
  return (
    <div className=" flex row items-center border-t-2 border-[#fafafa] h-[35px] fixed w-full bg-gray95 bottom-0 ">
      {menuIsOpen ? (
        <div
          id="menu"
          className="z-[9999px] absolute left-0 bottom-[36px] w-[165px] h-[300px] bg-gray95"
        >
          <div className="flex bg-[#7b7d7b] items-end h-full w-[26px]">
            <img className="" src={sideBar} alt="Window's 95" />
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        id="start"
        className="flex items-center w-[72px]  border-2 h-[28px]  ml-[.5rem]"
      >
        <div className="ml-[.3rem] flex gap-1 items-center mt-[.2rem] w-full h-full ">
          <img
            className=" w-[18px] h-[18px]"
            src={win95Icon}
            alt="Window's 95"
          />
          <button
            onClick={() =>
              menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
            }
            className="font-extrabold text-md text-l"
          >
            Start
          </button>
        </div>
      </div>
      {BioData.isBioOpen ? (
        <div
          id="window"
          className="flex gap-1 items-center w-[100px] border-2 h-[29px] my-1 ml-[.5rem]"
        >
          <img className="ml-1 w-[18px] h-[18px]" src={bio} alt="Biography" />
          <button
            className=" font-extrabold text-sm"
            onClick={() =>
              BioData.isBioResumed
                ? BioData.setIsBioResumed(false)
                : BioData.setIsBioResumed(true)
            }
          >
            Biography
          </button>
        </div>
      ) : (
        ""
      )}
      {ResumeData.isResumeOpen ? (
        <div
          id="window"
          className="flex  gap-1 items-center w-[100px] border-2 h-[29px] my-1 ml-[.5rem]"
        >
          <img
            className=" ml-1 w-[18px] h-[18px]"
            src={ResumeIcon}
            alt="Resume"
          />
          <button onClick={() => ResumeData.isResumeResumed ? ResumeData.setIsResumeResumed(false) : ResumeData.setIsResumeResumed(true)} className=" font-extrabold text-sm">Resume</button>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-1">

      </div>
      <div id="time" className=" mr-1 flex text-sm right-96 bg-gray-100 border-2 w-[160px] h-[29px]">
        <p className=" ml-1 mt-1 text-sm">

        {date + " " + time}
        </p>
      </div>
    </div>
  );
};
