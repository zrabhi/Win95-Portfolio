import { useContext, useState } from "react";
import MailIcon from "../assets/win95Icons/mail.png";
import { AppContext } from "../context/AppContext";

export const ContactMe = () => {
  const [object, setObject] = useState<string>("");

  const setOnChange = (event: any) => setObject(event.target.value);
  const { Clicked, setClicked } = useContext(AppContext)!;
  if (!Clicked)
    throw new Error("Biography.tsx must be used within a AppProvider");

  return (
    <div
      onClick={() => (Clicked !== "ContactMe" ? setClicked("ContactMe") : "")}
      className={`resize ${
        Clicked === "ContactMe" ? "z-[99999]" : "z-0"
      } border-4 left-48  fixed h-[40%] w-[500px] bg-gray95`}
    >
      <div className="m-[1px]  h-[1.7rem] w-auto p-1 z-10 border-2 bg-blue95 flex justify-between items-center">
        <div className="h-77 w-[540px] flex">
          <img
            className="pt-2 h-[20px] w-[16px] "
            src={MailIcon}
            alt="biography"
          />
          <p className="text-white p-1">Contact Me</p>
        </div>
        <div className="flex  gap-[1px] justify-between">
          <button
            className=""
            id="resume"
            type="button"
            // onClick={() => BioData.setIsBioResumed(true)}
          >
            <span className="">-</span>
          </button>
          <button id="resize">
            <span className="">-</span>
          </button>
          <button
            id="close"
            type="button"
            // onClick={() => BioData.setIsBioOpen(false)}
          >
            <span className="">x</span>
          </button>
        </div>
      </div>
      <div className="bg-[#fafafa] border-2 border-[#fff] h-[35%]">
        <div>
          <h3 className="font-bold text-md text-2xl pt-1 text-ellipsis">
            {object === "" ? "New Message" : object}
          </h3>
          <hr></hr>
        </div>
        <div className=" ">
          <h3 className="text-sm my-2 font-extrabold text-gray-300">
            To:
            <span className="text-black  border-2 border-blue-200 p-1 rounded-full bg-blue-300 text-sm ml-2">
              {" "}
              ZAC
            </span>
          </h3>
          <hr></hr>
        </div>
        <div className="">
          <div className="flex">
            <h3 className="text-sm my-2 font-extrabold text-gray-300">
              From:
              <input
                id="Form"
                className="ml-2 w-auto bg-none border-none  text-black"
              />
            </h3>
          </div>
          <hr></hr>
        </div>
        <div className="">
          <div className="flex">
            <h3 className="text-sm my-2 font-extrabold text-gray-300">
              Object:
              <input
                id="Form"
                className="ml-2 w-auto bg-none border-none  text-black"
                onChange={(e) => setOnChange(e)}
              />
            </h3>
          </div>
        </div>
      </div>
      <div className="h-[59%] w-full mt-1">
        <textarea className="w-full h-full  bg-gray95 border-2 border-y-[#5a5a5a] border-x-[#0f0f0f] b resize-none" />
      </div>
      {/* <div className="mx-10 my-2">
        <p>
          Excited to share how my cool background and passion for innovation can
          elevate your projects. Let’s collaborate and make magic happen!
        </p>
      </div> */}
    </div>
  );
};
