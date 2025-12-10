import React, { useState, useContext, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import LoginFooter from './LoginFooter';
import { dummyData } from './dummyData';
import {AuthContext} from '../../context/AuthContextProvider'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authAction';


const Login = () => {

    //USING CONTEXT API
    // const {setCurrentUser} = useContext(AuthContext);

    //USING REDUX
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser);
    const navigate = useNavigate();

    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });
    const [authError, setAuthError] = useState("");


    const handleChange = (e) => {
        setAuthData({...authData, [e.target.name]: e.target.value});
        validateField(e.target.name, e.target.value);
        
    }

    const validateField = (name, value) => {
        let errorMessage = "";

        if (name === "email") {
            if (!value) {
                errorMessage = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                errorMessage = "Email is invalid";
            }
        }

        if (name === "password") {
            if (!value) {
                errorMessage = "Password is required";
            } else if (value.length < 2) {
                errorMessage = "Password must be at least 6 characters long";
            }
        }

        setErrors({
            ...errors,
            [name]: errorMessage
        });
    };

    const authenticateUser = () => {
        console.log("Authenticating...");
        const user = dummyData.find(user => user.email === authData.email && user.password === authData.password)
        return user ? user : null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(authData.email);
        if (errors.email || errors.password || !authData.email || !authData.password) {
            setAuthError("Please fix errors before submitting.");
            return;
        }

        if(authenticateUser()){

            const user = authenticateUser();
            const loggedInUser = {
                name: user.name,
                email: user.email
            }
            console.log(loggedInUser);

            //CONTEXT API
            // localStorage.setItem("authData", JSON.stringify(loggedInUser)); 
            // setCurrentUser(loggedInUser);  
            
            //REDUX
            dispatch(login(loggedInUser));

            console.log("User logged in");
            navigate("/dashboard", {replace: true});
            
        }else{
            setAuthError("Invalid username or password");
        }
    }

    useEffect(() => {
        if(currentUser){
            console.log("User logged in");
            navigate("/dashboard", {replace: true});
        }
    }, []);
    

  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
        <form onSubmit={handleSubmit} className=' w-[28%] flex flex-col justify-start items-center'>
            <img className='w-[50%] mb-9' src="/logo.svg" alt="logo" />
            <div className='w-full mb-2 flex flex-col justify-center items-start'>
                <label className='mb-3 text-gray-800' htmlFor="email">Email</label>
                <input value={authData.email} onChange={handleChange} className='w-full border border-gray-600 rounded-md text-black py-3 px-4 font-bold placeholder:text-gray-500 ' type='email' name="email" id="email" placeholder='Enter email' />
            </div>
            <div className='text-red-600 text-sm mb-8 w-full text-left'>{errors.email}</div>
            <div className='w-full mb-2 flex flex-col justify-center items-start'>
                <label className='mb-3 text-gray-800' htmlFor="password">Password</label>
                <input value={authData.password} onChange={handleChange} className='w-full border border-gray-600 rounded-md text-black py-3 px-4 font-bold placeholder:text-gray-500 ' type="password" name="password" id="password" placeholder='Enter password' />
            </div>
            <div className='text-red-600 text-sm mb-5 w-full text-left'>{errors.password}</div>
            
            <Link className=' text-[#4398d7] mb-9 w-full text-right font-bold'>Forgot Password?</Link>
            <div className='text-red-600 text-sm mb-2 w-full text-center'>{authError}</div>
            <button type='submit' className='w-full cursor-pointer py-3 rounded-md text-white font-bold bg-[#4398d7]'>LOGIN</button>
        </form>
        <LoginFooter />
    </div>
  )
}

export default Login
