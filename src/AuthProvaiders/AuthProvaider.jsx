import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvaiders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvaider = new GoogleAuthProvider()


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvaider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, presentUser => {
            setUser(presentUser);
            // console.log('present user', presentUser);
            setUser(presentUser)
            // if (presentUser) {
            //     // console.log('res');
            //     axios.post('http://localhost:5000/jwt', { email: presentUser.email })
            //         .then(response => {
            //             console.log('res', response.data.token);
            //             localStorage.setItem('access-token', response.data.token);
            //             setLoading(false);
            //         })
            // }
            // localStorage.removeItem('access-token')

        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const Authinfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={Authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaiders;
