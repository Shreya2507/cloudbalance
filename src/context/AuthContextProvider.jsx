import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const storedUser = localStorage.getItem("authData");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const [currentUser, setCurrentUser] = useState(user);

  const logout = () => {
    localStorage.removeItem("authData"); 
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser, logout}} >
      {children}
    </AuthContext.Provider >
  )
}

export default AuthContextProvider;