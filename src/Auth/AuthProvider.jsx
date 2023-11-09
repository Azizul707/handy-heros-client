/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, linkWithCredential } from "firebase/auth";
import app from "../Config/firebaseConfig";
import axios from "axios";
export const AuthContext = createContext();

const AuthProvider = ( { children } ) => {
    
    const [ user, setUser ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( true );

    const auth = getAuth( app )
    const googleProvider = new GoogleAuthProvider();
    
    const createUser = ( email, password ) => {
        setIsLoading( true );
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singIn = ( email, password ) => {
        setIsLoading( true );
        return signInWithEmailAndPassword(auth, email, password );
    }

    const googleSingIn = () => {
        setIsLoading( true );
        return signInWithPopup( auth, googleProvider );
    }

    const singOut = () => {
        setIsLoading( true );
        return signOut( auth );
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged( auth, ( currentUser ) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser( currentUser );
            setIsLoading( false );
            if ( currentUser ) {
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
                    .then( res => {
                    console.log("token",res.data);
                    } )  
            } else {
                axios.post( 'http://localhost:5000/logout', loggedUser, {
                    withCredentials:true
                } )
                    .then( res => {
                        console.log(res.data);
                    } )
                
            }
        } );
        
        return () => {
            
            return unSubscribe;
        }
        
    },[auth])
    const authInfo = {
        isLoading,
        createUser,
        singIn,
        googleSingIn,
        singOut,
        user,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;