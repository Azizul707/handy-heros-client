/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loading from "../../assets/svg/Loading.json"
import Lottie from "lottie-react";

const PrivateRoute = ( { children } ) => {
    const { user, isLoading } = useContext( AuthContext );
    const location = useLocation()
    

    if ( isLoading ) {
        return <Lottie animationData={loading} loop={true}></Lottie>
    }

    if ( user ) {
        return children
    } else {
        return <Navigate to="/login" state={location.pathname} ></Navigate>
    }

};

export default PrivateRoute;
