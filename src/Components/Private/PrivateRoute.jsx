/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ( { children } ) => {
    const { user, isLoading } = useContext( AuthContext );

    console.log( user );

    if ( isLoading ) {
        return <p>Loading......</p>;
    }

    if ( user ) {
        return children
    } else {
        return <Navigate to="/login"></Navigate>
    }

};

export default PrivateRoute;
