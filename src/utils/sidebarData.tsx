import { RxDashboard } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlinePieChart } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdOutlineNotificationAdd } from "react-icons/md";

// Admin Icons 
import { FaHome } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { IoMdPeople } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md"
import { BsFillBarChartLineFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";

interface SideBarNavLinkArrayProps {
  name: string;
  icon: JSX.Element;
  link: string;
}

export const sidebarNavLinkData: Array<SideBarNavLinkArrayProps> = [
  {
    name: "Dashboard",
    icon: <FaHome className='w-5 h-5'  />,
    link: "/admin-dashboard",
  },
  {
    name: "Appointments",
    icon: <GrSchedule className='w-5 h-5' />,
    link: "/admin-appointments",
  },
  {
    name: "Specialities",
    icon: <IoMdPeople className='w-5 h-5' />,
    link: "/admin-specialities",
  },
  {
    name: "Doctors",
    icon: <FaUserDoctor className='w-5 h-5' />,
    link: "/admin-doctors",
  },
  {
    name: "Patients",
    icon: <IoPersonSharp className='w-5 h-5' />,
    link: "/admin-patients",
  },
  {
    name: "Reviews",
    icon: <MdOutlineStarBorderPurple500 className='w-5 h-5' />,
    link: "/admin-reviews",
  },
  {
    name: "Transactions",
    icon: <BsFillBarChartLineFill className='w-5 h-5' />,
    link: "/Transactions",
  },
  {
    name: "Reports",
    icon: <BiSolidReport className='w-5 h-5' />,
    link: "/Reports",
  },
];
