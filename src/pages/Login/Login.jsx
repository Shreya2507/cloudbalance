import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import LoginFooter from './LoginFooter';
import { dummyData } from './dummyData';

const Login = () => {
    const navigate = useNavigate();
    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    });


    const handleChange = (e) => {
        setAuthData({...authData, [e.target.name]: e.target.value});
        
    }

    const authenticateUser = () => {
        console.log("Authenticating...");
        const user = dummyData.find(user => user.email === authData.email && user.password === authData.password)
        return user ? true : false;
    }

    const handleSubmit = () => {
        console.log(authData);
        if(authenticateUser()){
            localStorage.setItem("authData", JSON.stringify(authData));
            console.log("User logged in");
            navigate("/dashboard");
            
        }else{
            console.log("Invalid username or password");
        }
    }

  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
        <div className=' w-[28%] flex flex-col justify-start items-center'>
            <img className='w-[50%] mb-9' src="/logo.svg" alt="logo" />
            <div className='w-full mb-9 flex flex-col justify-center items-start'>
                <label className='mb-3 text-gray-800' htmlFor="email">Email</label>
                <input value={authData.email} onChange={(e) => handleChange(e)} className='w-full border border-gray-600 rounded-md text-black py-3 px-4 font-bold placeholder:text-gray-500 ' type="text" name="email" id="email" placeholder='Enter email' />
            </div>
            <div className='w-full mb-5 flex flex-col justify-center items-start'>
                <label className='mb-3 text-gray-800' htmlFor="password">Password</label>
                <input value={authData.password} onChange={(e) => handleChange(e)} className='w-full border border-gray-600 rounded-md text-black py-3 px-4 font-bold placeholder:text-gray-500 ' type="password" name="password" id="password" placeholder='Enter password' />
            </div>
            
            <Link className=' text-[#4398d7] mb-9 w-full text-right font-bold'>Forgot Password?</Link>
            <button onClick={handleSubmit} className='w-full cursor-pointer py-3 rounded-md text-white font-bold bg-[#4398d7]'>LOGIN</button>
        </div>
        <LoginFooter />
    </div>
  )
}

export default Login
