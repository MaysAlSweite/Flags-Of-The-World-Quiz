import React, { useEffect } from 'react'
import { readData } from '../storage/storage';
import { Navigate, useNavigate } from 'react-router-dom';
interface IProps {
children: React.ReactNode;
allowed:string[]
}
const Guard = (props:IProps) => {
    const user = readData('user');
       
        if(!user)
        {
            return <Navigate to='/login'  />
        }
    if(props.allowed.includes(user.role)){
        return props.children
    }
    else{
        return <h1>Access Denied</h1>
    }
}

export default Guard

