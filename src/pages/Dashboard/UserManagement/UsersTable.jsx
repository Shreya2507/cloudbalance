import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

const UsersTable = () => {
  const navigate = useNavigate();
  const headers = [
    "First Name",
    "Last Name",
    "Email ID",
    "Role",
    "Last Login",
    "Actions",
  ];
  const [usersData, setUsersData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await axios.get(
          "http://localhost:8080/api/users"
          // "https://692423053ad095fb8472db99.mockapi.io/users"
        );
        console.log(data.data);
        setUsersData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError("Error in loading table");
      }
    }

  useEffect(() => {
    
    function getData() {
      fetchData();
    }
    getData();
  }, []);

  const deleteUser = async (user) => {
    try {
      setIsLoading(true);
      const data = await axios.delete(
        `http://localhost:8080/api/users/${user.userId}`
        // "https://692423053ad095fb8472db99.mockapi.io/users"
      );
      console.log(data.data);
      setIsLoading(false);
      fetchData();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError("Error in loading table");
    }
  };


  return (
    <>
      <div className=" text-2xl font-bold text-gray-800 mb-7">Users</div>

      <div className="bg-white rounded-lg p-5">
        <NavLink
          to="create"
          className=" w-48 mb-5 cursor-pointer flex justify-center items-center gap-2 font-bold bg-blue-800 rounded-sm px-4 py-2.5 text-white"
        >
          <IoMdAdd className="w-6 h-6" />
          <div>Add New User</div>
        </NavLink>

        <div className=" overflow-y-auto rounded-lg shadow-md">
          <div className="w-full h-[68vh] overflow-y-auto">
            {isLoading ? (
              <div className="flex justify-center items-center h-full w-full">
                <PuffLoader
                  color="blue"
                  size={60}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : error === "" ? (
              <table className=" min-w-full divide-y divide-gray-300 text-left text-sm">
                {/* Header */}
                <thead className="bg-blue-50">
                  <tr>
                    {headers.map((title, index) => (
                      <th
                        key={index}
                        className="py-3 pl-2 font-semibold text-blue-800 uppercase tracking-wider"
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Body */}
                <tbody className="divide-y divide-gray-200 bg-white">
                  {usersData?.map((user, index) => {
                    // const roles = ["Admin", "Customer", "Read-only"];
                    // const mockRole =
                    //   roles[Math.floor(Math.random() * roles.length)];
                    return (
                      <tr
                        key={index}
                        className="even:bg-neutral-100 odd:bg-white text-black transition-colors"
                      >
                        <td className="capitalize px-3 py-4 whitespace-nowrap">
                          {user.firstName}
                        </td>
                        <td className="capitalize px-3 py-4 whitespace-nowrap">
                          {user.lastName}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="capitalize py-0.5 w-2/3 bg-blue-50 text-center border font-semibold border-blue-800 rounded-md">
                            {user.role}
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          {user.lastLogin === null ? "--" : user.lastLogin}
                        </td>
                        <td className="pl-2 pr-6 py-4 whitespace-nowrap flex justify-start gap-6 items-center">
                          <Switch {...label} defaultChecked />
                          <button className="h-7 w-7 rounded-md cursor-pointer">
                            <FaPencilAlt
                              onClick={() => navigate("edit", { state: user })}
                              className=" text-blue-800 m-auto"
                            />
                          </button>
                          <button
                            onClick={() => {
                              deleteUser(user);
                            }}
                            className="py-1 px-5 border bg-white font-semibold text-blue-800 border-blue-800 rounded-md cursor-pointer"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="w-full h-full flex items-center justify-center font-semibold">
                {error} !
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
