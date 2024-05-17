import React, { useContext } from "react";
import BioIcon from "./assets/win95Icons/bio.png";
import ResumeIcon from "./assets/win95Icons/resume.png";
import { Resume } from "./components/Resume";
import Photos from "./assets/win95Icons/photos.png";
import MailIcon from "./assets/win95Icons/mail.png";
// import Clippy from "./assets/win95Icons/clippy.gif";
import Rover from "./assets/win95Icons/rover.gif";
import { Biography } from "./components/Biography";
import { AppContext} from "./context/AppContext";
import { FooterNav } from "./components/Footer";
// import { ContactMe } from "./components/ContactMe";

// const Win95Icons = {
//   bio: "./assets/win95Icons/bio.png",
//   resume: "./assets/win95Icons/resume.png",
//   photos: "./assets/win95Icons/photos.png",
// };

function App() {
  const { BioData, ResumeData, WindowData, setClicked } =
    useContext(AppContext)!;

  if (!BioData || !ResumeData || !WindowData) {
    throw new Error("App.tsx must be used within a AppProvider");
  }

  return (
    <div className="h-[950px]">
      {/* <ContactMe /> */}
      {}
      {BioData.isBioOpen && !BioData.isBioResumed ? <Biography /> : ""}
      {ResumeData.isResumeOpen && !ResumeData.isResumeResumed ? <Resume /> : ""}
      <ul className="p-10  w-20  flex flex-col gap-8">
        <li className="w-20 hover:bg-gray-600">
          {/* TODO:remeber to check on resumed window */}
          <button
            className=""
            onClick={() => {
              if (BioData.isBioResumed)
                  BioData.setIsBioResumed(false)
              else
              {
                BioData.setIsBioOpen(true) 
                setClicked("Bio")
              }
            }}
          >
            <img className="ml-3 w-[32px] h-[32px]" src={BioIcon} alt="Bio" />
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
              className="ml-3 w-[32px] h-[32px]"
              src={ResumeIcon}
              alt="Resume"
            />
            <p className="pt-2 font-msserif font-thin text-sm text-white">
              Resume
            </p>
          </button>
        </li>
        <li className="w-16 hover:bg-gray-600">
          <button>
            <img className="ml-3 w-[32px] h-[32px]" src={Photos} alt="Photos" />
            <p className="pt-2 font-msserif  font-thin text-sm text-white">
              Photos
            </p>
          </button>
        </li>
        <li className="w-16 hover:bg-gray-600">
          <button>
            <img
              className="ml-3 w-[32px] h-[32px]"
              src={MailIcon}
              alt="Photos"
            />
            <p className="pt-2 font-msserif font-thin text-sm  text-white">
              Contact Me
            </p>
          </button>
        </li>
      </ul>
      <div className="bottom-2 absolute">
        <img src={Rover} alt="Rover" />
      </div>
      <FooterNav />
    </div>
  );
}

export default App;
