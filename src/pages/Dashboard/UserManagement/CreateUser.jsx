import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CreateUser = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const validateField = (name, value) => {
    let errorMessage = "";

    if (name === "email") {
      if (!value) {
        errorMessage = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = "Email is invalid";
      }
    }

    // First Name
    if (name === "firstName") {
      if (!value.trim()) {
        errorMessage = "First name is required";
      } else if (!/^[A-Za-z]+$/.test(value)) {
        errorMessage = "First name must contain only letters";
      }
    }

    // Last Name
    if (name === "lastName") {
      if (!value.trim()) {
        errorMessage = "Last name is required";
      } else if (!/^[A-Za-z]+$/.test(value)) {
        errorMessage = "Last name must contain only letters";
      }
    }

    // Dropdown (example: role)
    if (name === "role") {
      if (!value) {
        errorMessage = "Please select a role";
      }
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const handleSubmit = (e) => {
    console.log("Submitted");
    e.preventDefault();
    toast.success("User Created", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    console.log(userData);
  };

  const handleReset = () => {
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    });

    navigate("/dashboard/user-management");
  };

  return (
    <>
      <div className=" text-2xl font-bold text-gray-800 mb-7">Add New User</div>
      <div className="bg-white rounded-lg p-5">
        <form onSubmit={(e) => handleSubmit(e)} className=" w-full">
          <div className="grid w-[50%] grid-cols-2 grid-rows-2 gap-5 mb-8">
            <div className="flex flex-col">
              <label htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                className="w-full py-3 px-4 border border-gray-300 rounded-sm"
                name="firstName"
                value={userData.firstName}
                onChange={(e) => handleChange(e)}
                placeholder="Enter First Name"
                id="firstName"
                type="text"
              />
              <div className="text-red-500 text-sm mt-2">{errors.firstName}</div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                className="w-full py-3 px-4 border border-gray-300 rounded-sm"
                name="lastName"
                value={userData.lastName}
                onChange={(e) => handleChange(e)}
                placeholder="Enter Last Name"
                id="lastName"
                type="text"
              />
              <div className="text-red-500 text-sm mt-2">{errors.lastName}</div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                required
                className="w-full py-3 px-4 border border-gray-300 rounded-sm"
                name="email"
                value={userData.email}
                onChange={(e) => handleChange(e)}
                placeholder="Enter Email ID"
                id="email"
                type="email"
              />
              <div className="text-red-500 text-sm mt-2">{errors.email}</div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="role">Role</label>
              <select
                className="w-full py-3.5 px-4 border disabled:bg-gray-800 border-gray-300 rounded-sm bg-white"
                name="role"
                value={userData.role}
                onChange={(e) => handleChange(e)}
                id="role"
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
                <option value="read-only">Read-only</option>
              </select>
            </div>
          </div>

          <ToastContainer />

          <div className="w-full flex justify-end items-center gap-8">
            <button
              type="reset"
              onClick={handleReset}
              className=" w-48 h-full box-border cursor-pointer flex justify-center items-center gap-2 font-bold border-2 border-blue-800 rounded-sm px-4 py-2.5 bg-white text-blue-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" w-48 h-full box-border cursor-pointer flex justify-center items-center gap-2 font-bold border-2 border-transparent bg-blue-800 rounded-sm px-4 py-2.5 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
