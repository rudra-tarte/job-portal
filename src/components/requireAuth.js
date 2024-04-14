import React from 'react';
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RequireAuth({role,children}) {


    //const auth = useAuth();

    const user = useSelector(state=>state.users);

    //console.log("role :",role.includes(auth.user))

    //if(!auth.user)
    //if(!role.includes(auth.user))
    if(!role.includes(user))
    {
        return <Navigate to="/" ></Navigate>
    }

  return children;
}
