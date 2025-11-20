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
    <div className={`${isSidebarOpen ? ' w-64' : 'w-20'} py-5 px-3 bg-white h-full transition-all duration-300 ease-linear`}>
        {
            isSidebarOpen ?
            <>
            <div className='h-full w-full flex flex-col gap-2'>
            {
                sidebarLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <NavLink to={link.linkTo} key={link.linkTo} className={({isActive}) => `w-full h-10 ${isActive ? 'bg-blue-100' : 'bg-white'} rounded-sm px-3 py-1 flex justify-start items-center gap-3 `} >
                            {({isActive}) => (
                                
                                    <>
                                    <div className={`flex justify-center items-center ${isActive ? 'bg-blue-500' : ''} h-[30px] w-[30px] rounded-md`}>
                                        <Icon className={`${isActive ? 'text-white' : 'text-gray-700'} w-5 h-5`}/>
                                    </div>
                                    <div className='font-semibold text-gray-600'>{link.title}</div>
                                    </>
                                )}
                            
                        </NavLink>   
                    )
                })
            }
                     
                </div>
            </>
            :
            <>
            <div className='h-full w-full flex flex-col gap-2'>
            {
                sidebarLinks.map((link, index) => {
                    const Icon = link.icon;
                    
                    return (
                        <NavLink to={link.linkTo} key={link.linkTo} className={({isActive}) => `w-full h-10 ${isActive ? 'bg-blue-100 text-white' : 'bg-white text-gray-600 '} px-3 py-1 flex justify-center items-center gap-3 bg-blue-500 h-[50px] w-full rounded-md `} >
                           
                            <Icon className="h-5 w-5" />
                            
                        </NavLink>   
                    )
                })
            }
                     
        </div>
            </>
        }
        
        
    </div>
  )
}

export default Sidebar
