import bio from "../assets/win95Icons/bio.png";
import self from "../assets/Biography/zac.png"
export const Biography = () => {
  return (
    <div className="resize z-99 border-4 left-48  fixed h-[780px] w-[550px] bg-gray95">
      <div className="m-[1px] p-1 z-10 border-2 bg-blue95 flex justify-between items-center">
        <div className="h-77 w-[540px] flex">
          <img className="pt-1 h-5" src={bio} alt="biography" />
          <p className="text-white p-1">Biography</p>
        </div>
        <div className="flex  gap-1 justify-between">
          <button id="resume" type="button" >
            <span className="">
                -
            </span>
          </button>
          <button id="close"  type="button">
          <span className="">
                x
            </span>
          </button>
          <button id="resize" >
            <span className="">-</span>
          </button>
        </div>
      </div>
      {/* 
      content div
      */}
      <div className="pt-10 px-16">
        <img className="w-full min-h-72 h-52" src={self} alt="self" />
        <h2 className="text-2xl font-bold py-5"> Zakaria Rabhi (ZAC)</h2>
        <h4 className="text-gray-600 font-medium pt-4 text-xs">
        I'm a junior software system administrator based in Khouribga, Morocco, and a student at 1337 Coding school - 42 Network

I'm passionate about managing systems and
ensuring their smooth operation to tackle real-world challenges.

        </h4>
        <h4 className="text-gray-600 font-medium pt-4 text-xs" >Morocco  📍</h4>
     </div>
    </div>
  );
};
