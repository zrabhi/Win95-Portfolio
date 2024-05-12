import MailIcon from "../assets/win95Icons/mail.png";

export const ContactMe = () => {
  return (
    <div className="resize z-99 border-4 left-48  fixed h-[480px] w-[500px] bg-gray95">
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
      <div className="bg-[#fafafa] border-2 border-[#fff] h-[205px]">
        <div>
            <h3 className="font-bold text-md text-2xl pt-1 text-ellipsis">New Message</h3>
            <hr></hr>
        </div>
        <div className=" flex ">
                <h3>To: </h3>
                <span>ZAC</span>
        </div>
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
