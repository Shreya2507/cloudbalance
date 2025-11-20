import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const UserManagement = () => {
  const headers = [
    "First Name", 
    "Last Name",
    "Email ID",
    "Role",
    "Last Login",
    "Actions"
  ];
  const usersData = [
    {
      firstName: "Shreya", 
      lastName: "Mathur",
      email: "shreya@gmail.com",
      role: "admin",
      lastLogin: "2025-07-25"
    },
    {
      firstName: "Shreya", 
      lastName: "Mathur",
      email: "shreya@gmail.com",
      role: "admin",
      lastLogin: "2025-07-25"
    },
    {
      firstName: "Shreya", 
      lastName: "Mathur",
      email: "shreya@gmail.com",
      role: "admin",
      lastLogin: "2025-07-25"
    },
    {
      firstName: "Shreya", 
      lastName: "Mathur",
      email: "shreya@gmail.com",
      role: "admin",
      lastLogin: "2025-07-25"
    },
    {
      firstName: "Shreya", 
      lastName: "Mathur",
      email: "shreya@gmail.com",
      role: "admin",
      lastLogin: "2025-07-25"
    }

  ]

  return (
    <div className='h-full w-full p-5'>
      <div className=' text-2xl font-bold text-gray-800 mb-7'>Users</div>

      <div className='bg-white rounded-lg p-5'>
        <NavLink to="create" className=' w-48 mb-5 cursor-pointer flex justify-center items-center gap-2 font-bold bg-gray-700 rounded-sm px-4 py-2 text-white'>
          <IoMdAdd className='w-6 h-6' />
          <div>Add New User</div>
        </NavLink>
      
      <div className=" overflow-x-auto rounded-lg shadow-md">
  <table className="min-w-full divide-y divide-gray-300 text-left text-sm">
    
    {/* Header */}
    <thead className="bg-gray-300">
      <tr>
        {headers.map((title, index) => (
          <th 
            key={index}
            className="px-6 py-3 font-semibold text-gray-700 uppercase tracking-wider"
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>

    {/* Body */}
    <tbody className="divide-y divide-gray-200 bg-white">
      {usersData.map((user, index) => (
        <tr 
          key={index}
          className=" text-black transition-colors"
        >
          <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
          <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin}</td>
          <td className="px-6 py-4 whitespace-nowrap flex justify-start gap-3 items-center">
            <button className='bg-amber-600 h-7 w-7 rounded-md cursor-pointer'><FaPencilAlt className=' text-white m-auto' /></button>
            <button className='bg-red-600 h-7 w-7 rounded-md cursor-pointer'><FaTrashAlt className='text-white m-auto' /></button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
    </div>

    </div>
  )
}

export default UserManagement
