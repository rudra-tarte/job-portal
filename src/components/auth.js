import React, { useContext } from 'react'
import { createContext, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/userSlice';

const AuthContext = createContext(null);

export default function Auth({children}) {

    //const [user,setUser] = useState(null);

    const user = useSelector(state=>state.users);

    const dispatch = useDispatch();


    // const login = (user)=> {
    //     setUser(user);
    //     console.log("ho raha hai")
    // }

    const login = (user)=> {
        //setUser(user);
        dispatch(addUser(user));
    }

    const logout =() =>
    {
        //setUser(null);
        dispatch(addUser(""));

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
