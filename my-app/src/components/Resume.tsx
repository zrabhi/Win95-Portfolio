import ResumeIcon from "../assets/win95Icons/resume.png";
import resume from "../assets/Resume/ZAKARIA-RABHI.pdf";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Resume = () => {
  const {ResumeData, Clicked, setClicked } = useContext(AppContext)!;
  if (!Clicked|| !ResumeData)
    throw new Error("Biography.tsx must be used within a AppProvider");

  return (
    <div
      onClick={() => (Clicked !== "Resume" ? setClicked("Resume") : "")}
      className={`overflow-y-hidden resize ${
        Clicked === "Resume" ? "z-[99999]" : "z-0"
      } border-4 left-48  fixed h-[780px] w-[550px] bg-gray95`}
    >
      <div className={`m-[1px]  h-[1.7rem] w-auto p-1 z-10 border-2 ${Clicked !== "Resume"? "bg-gray-500" : "bg-blue95" } flex justify-between items-center`}>
        <div className="h-77 w-[540px] flex">
          <img className="pt-1 h-5" src={ResumeIcon} alt="biography" />
          <p className="text-white p-1">Resume</p>
        </div>
        <div className="flex  gap-1 justify-between">
          <button id="resume" type="button" onClick={()=> ResumeData.setIsResumeResumed(true)}>
            <span className="">-</span>
          </button>
          <button id="resize">
            <span className="">+</span>
          </button>
          <button id="close" type="button" onClick={()=>  ResumeData.setIsResumeOpen(false)}>
            <span className="">x</span>
          </button>
        </div>
      </div>
      <div className="w-full h-full overflow-auto">
        <div className="h-[1000px]">
          <iframe
            className="w-full overflow-hidden h-[1000px]"
            src={resume}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
