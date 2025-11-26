import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { NavLink, Outlet } from 'react-router-dom';
import { PuffLoader } from "react-spinners";

const UsersTable = () => {
    const headers = [
    "First Name", 
    "Last Name",
    "Email ID",
    "Role",
    "Last Login",
    "Actions"
  ];
  const [usersData, setUsersData] = useState();

  // const usersData = [
  //   {
  //     firstName: "Shreya", 
  //     lastName: "Mathur",
  //     email: "shreya@gmail.com",
  //     role: "admin",
  //     lastLogin: "2025-07-25"
  //   },
  //   {
  //     firstName: "Shreya", 
  //     lastName: "Mathur",
  //     email: "shreya@gmail.com",
  //     role: "admin",
  //     lastLogin: "2025-07-25"
  //   },
  //   {
  //     firstName: "Shreya", 
  //     lastName: "Mathur",
  //     email: "shreya@gmail.com",
  //     role: "admin",
  //     lastLogin: "2025-07-25"
  //   },
  //   {
  //     firstName: "Shreya", 
  //     lastName: "Mathur",
  //     email: "shreya@gmail.com",
  //     role: "admin",
  //     lastLogin: "2025-07-25"
  //   },
  //   {
  //     firstName: "Shreya", 
  //     lastName: "Mathur",
  //     email: "shreya@gmail.com",
  //     role: "admin",
  //     lastLogin: "2025-07-25"
  //   },
  //   {
  //     firstName: "Shreya", 
  //     lastName: "Mathur",
  //     email: "shreya@gmail.com",
  //     role: "admin",
  //     lastLogin: "2025-07-25"
  //   },

  // ]

  useEffect(() => {
    async function fetchData (){
      const data = await axios.get("https://692423053ad095fb8472db99.mockapi.io/users");
      console.log(data.data);
      setUsersData(data.data);
    }

    fetchData();
    
  }, []);

  return (
    <>
    <div className=' text-2xl font-bold text-gray-800 mb-7'>Users</div>

      <div className='bg-white rounded-lg p-5'>
        <NavLink to="create" className=' w-48 mb-5 cursor-pointer flex justify-center items-center gap-2 font-bold bg-blue-800 rounded-sm px-4 py-2.5 text-white'>
          <IoMdAdd className='w-6 h-6' />
          <div>Add New User</div>
        </NavLink>
      
      <div className=" overflow-y-auto rounded-lg shadow-md">
        <div className='w-full h-[68vh] overflow-y-auto'>
          {usersData ? 
  <table className=" min-w-full divide-y divide-gray-300 text-left text-sm">
    
    {/* Header */}
    <thead className="bg-blue-50">
      <tr>
        {headers.map((title, index) => (
          <th 
            key={index}
            className="px-6 py-3 font-semibold text-blue-800 uppercase tracking-wider"
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>

    {/* Body */}
    <tbody className="divide-y divide-gray-200 bg-white">
      { usersData.map((user, index) => {
        const roles = ['Admin', 'Customer', 'Read-only'];
        const mockRole = roles[Math.floor(Math.random() * roles.length)];
        return(
        <tr 
          key={index}
          className="even:bg-neutral-100 odd:bg-white text-black transition-colors"
        >
          <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
          <td className="px-6 py-4 whitespace-nowrap"><div className='capitalize py-0.5 w-2/3 bg-blue-50 text-center border font-semibold border-blue-800 rounded-md'>{mockRole}</div></td>
          <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
          <td className="px-6 py-4 whitespace-nowrap flex justify-start gap-6 items-center">
            <button className='h-7 w-7 rounded-md cursor-pointer'><FaPencilAlt className=' text-blue-800 m-auto' /></button>
            <button className='py-1 px-5 border bg-white font-semibold text-blue-800 border-blue-800 rounded-md cursor-pointer'>Delete</button>
          </td>
        </tr>
      )})
}
    </tbody>
  </table>
  : <div className='flex justify-center items-center h-full w-full'>
          <PuffLoader
            color="blue"
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        }
  </div>
  
    </div>
    </div>
    </>
  )
}

export default UsersTable
