import React, { useContext } from 'react'
import { createContext, useState } from "react";

const AuthContext = createContext(null);

export default function Auth({children}) {

    const [user,setUser] = useState(null);

    // const login = (user)=> {
    //     setUser(user);
    //     console.log("ho raha hai")
    // }

    const login = (user)=> {
        setUser(user);
    }

    const logout =() =>
    {
        setUser(null);
    }

  return (
    <AuthContext.Provider value={{user, login, logout}} >
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth =()=>
{
    return useContext(AuthContext);
}
