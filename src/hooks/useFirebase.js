import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../coponents/Firebase/firebaseInit';
import {
    getAuth,
    signInWithPopup,
    signOut,
    updateProfile,
    onAuthStateChanged,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [name, setName] = ("");
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState("");

    const auth = getAuth();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [])

    const signOutWithGoogle = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }



    // craete account with email and password
    const registrationWithEmail = e => {
        e.preventDefault();
    }
    const handleCreateAccount = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            });
    }
    const handleSignInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
            .catch((error) => {
                setError(error.message)
            });
    }


    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        signOutWithGoogle,

        // create account with email
        registrationWithEmail,
        handleCreateAccount,
        handleSignInWithEmail
    }
};

export default useFirebase;