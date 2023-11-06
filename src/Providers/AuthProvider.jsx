import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

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
            setUser(currentUser);
            setReload(false);
        })

        return () => {() => unsubscribe() };

    }, [])

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