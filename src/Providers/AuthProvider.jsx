import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [reload, setReload] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        setReload(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const userProfile = (user, userName, photoURL) => {
        setReload(true);
        return updateProfile(user, {
            displayName: userName,
            photoURL: photoURL
        });
    }

    const login = (email, password) => {
        setReload(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogIn = () => {
        setReload(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setReload(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedInUser = {email: userEmail};
            setUser(currentUser);
            setReload(false);

            if(currentUser){
                axios.post('http://localhost:5000/jwt', loggedInUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logOut', loggedInUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
        })

        return () => {() => unsubscribe() };

    }, [user?.email])

    const authInfo = { user, reload, signUp, userProfile, login, googleLogIn, logOut }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;