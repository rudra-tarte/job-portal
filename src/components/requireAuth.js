import React from 'react';
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({children}) {

    const auth = useAuth();

    // if(!auth.user)
    if(!auth.user)
    {
        return <Navigate to="/" ></Navigate>
    }

  return children;
}
