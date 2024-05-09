import { useState } from "react"
import sideBar from "../assets/sidebar-image.png"
import win95Icon from "../assets/win95.png"

export const FooterNav = () =>
{
 const [menuIsOpen , setMenuIsOpen] = useState<boolean>(false)
return (
    <div className=" flex row items-center border-t-2 border-[#fafafa] h-[35px] absolute w-full bg-gray95 bottom-0 ">
        {menuIsOpen ?
        <div id="menu" className="z-[9999px] absolute left-0 bottom-[36px] w-[165px] h-[300px] bg-gray95">
            <div className="flex bg-[#7b7d7b] items-end h-full w-[26px]">
                <img className="" src={sideBar} alt="Window's 95"/>
            </div>
        </div>
        : ""}
        <div  id="start"className="flex items-center w-[72px]  border-2 h-[29px] mb-1 mt-1 ml-[.5rem]">
        <div className="ml-[.3rem] flex gap-1 items-center mt-[.2rem] w-full h-full ">
        <img className=" w-[18px] h-[18px]"src={win95Icon} alt="Window's 95" />
        <button onClick={() => menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)} className=" font-extrabold text-sm">Start</button>
        </div>
        </div>
    </div>
)
}