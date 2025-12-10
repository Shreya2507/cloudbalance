import React from 'react'
import { NavLink } from 'react-router-dom';
import { GrUserSettings } from "react-icons/gr";
import { BiSolidUserAccount } from "react-icons/bi";
import { TbZoomMoney } from "react-icons/tb";
import { SiAmazonwebservices } from "react-icons/si";

const Sidebar = ({isSidebarOpen}) => {
    const sidebarLinks = [
        {
            title: "User Management",
            linkTo: "user-management",
            icon: GrUserSettings
        },
        {
            title: "Onboarding",
            linkTo: "onboarding",
            icon: BiSolidUserAccount

        },
        {
            title: "Cost Explorer",
            linkTo: "cost-explorer",
            icon: TbZoomMoney
        },
        {
            title: "AWS Services",
            linkTo: "aws-services",
            icon: SiAmazonwebservices
        }
    ];


  return (
    <div
  className={`${isSidebarOpen ? 'w-64' : 'w-20'} 
  py-5 px-3 bg-white h-full 
  transition-all duration-300 ease-in-out overflow-hidden`}
>
  <div className="h-full w-full flex flex-col gap-2">
    {sidebarLinks.map((link) => {
      const Icon = link.icon;

      return (
        <NavLink
          to={link.linkTo}
          key={link.linkTo}
          className={({ isActive }) =>
            `w-full h-10 rounded-sm px-3 py-1 flex items-center gap-3
            transition-all duration-300 
            ${isActive ? 'bg-blue-100' : 'bg-white'}`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`flex justify-center items-center h-[30px] w-[30px] rounded-md
                transition-all duration-300
                ${isActive ? 'bg-blue-500' : 'bg-gray-200'}`}
              >
                <Icon
                  className={`w-9 h-9 p-1 transition-all duration-300
                  ${isActive ? 'text-white' : 'text-gray-700'}`}
                />
              </div>

              {/* Text transitions */}
              <span
                className={`
                font-semibold text-gray-600 whitespace-nowrap
                transition-all duration-300
                ${isSidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                `}
              >
                {link.title}
              </span>
            </>
          )}
        </NavLink>
      );
    })}
  </div>
</div>

  )
}

export default Sidebar
