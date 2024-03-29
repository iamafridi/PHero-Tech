import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser =(email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
const logout =()=>{
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log("USER IN THE STATE",currentUser);
        setUser(currentUser);
        setLoading(false);
    });
    return ()=>{
        unSubscribe();
    }
},[])



    const userInfo = {
        user,
        createUser,
        loading,
        signInUser,
        logout
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;