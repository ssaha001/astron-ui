import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"
import authServiceInstance from './services/AuthService';

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.user);
    let location = useLocation();
    console.log(authServiceInstance.isUserAuthenticated())
    if(!authServiceInstance.isUserAuthenticated()) {
        return <Navigate to="/signin"/>
    }
 return children

};

export default ProtectedRoute;