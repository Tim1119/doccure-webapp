import { NavLink, useLocation } from 'react-router-dom';

interface NavItemProps {
    icon:JSX.Element,
    name:string,
    link:string,  
    toggleSidebarLink?: () => void;
  }
  

const NavItem = ({icon,name,link,toggleSidebarLink}:NavItemProps) => {

    const location = useLocation()

  return (
    <NavLink to={link} onClick={toggleSidebarLink}  className="">
    <div className={`flex my-[1px] items-center gap-[10px] group text-[15px] font-[0.875rem] text-[white] px-3 py-2 mx-4 rounded-lg group ${location.pathname == link ? "bg-maroon text-white" : "hover:bg-maroon hover:text-white"}`} >
      {icon}
      <span className="text-base">
       {name}
      </span>
    </div>
  </NavLink>
  )
}

export default NavItem