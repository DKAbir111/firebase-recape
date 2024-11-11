import PropTypes from "prop-types"
import { AuthContext } from "../Context/Context"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase.init"
import { useEffect, useState } from "react"


export default function AuthProvider({ children }) {


    const [loading, setLoading] = useState(true);
    // create User
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    // Check login user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            console.log('User is signed in:', currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        return (() => {
            unSubscribe();
        })
    }, [])

    // Sign out
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        signInUser,
        user,
        signOutUser,
        loading
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}