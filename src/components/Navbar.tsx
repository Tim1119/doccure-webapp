import logo from "../assets/logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import avatarImg from "../assets/avatar/patient.jpg";
import { HiMagnifyingGlass,HiMiniChevronDown } from "react-icons/hi2";

interface Props{
  setIsMobileSidebarOpen: (value: boolean) => void;
  isMobileSidebarOpen:boolean
}

const Navbar = ({setIsMobileSidebarOpen,isMobileSidebarOpen}:Props) => {
  return (
    <header className="h-[60px] fixed top-0 font-poppins w-full border-b border-gray-300 shadow-sm text-[#6C7383] bg-white z-[3]">
      <div className="flex items-center justify-between px-4 h-full w-full mx-auto">
        <section className="gap-5 flex items-center">
          <span className="lg:hidden" onClick={()=>setIsMobileSidebarOpen(!isMobileSidebarOpen)} >
            <FaBars className='w-6 text-primary h-6' />
          </span>
          <img src={logo} className="object-contain h-[45px] lg:h-[50px] lg:w-[120px] lg:justify-between w-fit hidden object-fit md:inline-flex" alt="" />
        </section>
        <section className="flex items-center gap-4">
          <HiMagnifyingGlass className="w-6 h-6 hidden md:inline-flex" />

          <button className="inline-block relative">
            <IoMdNotificationsOutline className=" w-7 h-7" />

            <span className="absolute text-xs -top-[6px] font-medium mr-1 px-1.5 py-0.5 rounded-full text-white bg-primary ">
              4
            </span>
          </button>
          <div className="flex items-center gap-1 cursor-pointer md:p-2 rounded-md">
            <div className="relative cursor-pointer border rounded-full ">
              <img className="w-8 h-8 rounded-full p-[2px]" src={avatarImg} alt="" />
              <span className="font-poppins bottom-0 left-6 absolute  w-2.5 h-2.5 bg-green-400 border-2 border-white  rounded-full text-white"></span>
            </div>
            <p className="hidden md:inline-flex text-sm font-medium">K. Anderson</p>
            <HiMiniChevronDown className="w-5 h-5" /> 
          </div>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
