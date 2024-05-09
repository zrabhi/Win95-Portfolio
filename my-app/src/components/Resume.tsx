import ResumeIcon from "../assets/win95Icons/resume.png"
import { Document ,Page} from 'react-pdf';
import resume from "../assets/Resume/zrabhi.pdf"
export const Resume = () => {
  return (
    <div className="overflow-y-auto resize z-99 border-4 left-48  fixed h-[780px] w-[550px] bg-gray95">
      <div className="m-[1px]  w-auto p-1 z-10 border-2 bg-blue95 flex justify-between items-center">
        <div className="h-77 w-[540px] flex">
          <img className="pt-1 h-5" src={ResumeIcon} alt="biography" />
          <p className="text-white p-1">Resume</p>
        </div>
        <div className="flex  gap-1 justify-between">
          <button id="resume" type="button">
            <span className="">-</span>
          </button>
          <button id="close" type="button">
            <span className="">x</span>
          </button>
          <button id="resize">
            <span className="">-</span>
          </button>
        </div>
      </div>

      <Document file={"../assets/Resume/Resume-pdf.pdf"}>
        </Document>
    </div>
  );
};
