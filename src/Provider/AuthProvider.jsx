import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Config/FirebaseConfig/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   
   const createUser = (email, password) => {
      setIsLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const googleSign = () => {
      setIsLoading(true)
      return signInWithPopup(auth, provider)
   }

   const login = (email, password) => {
      setIsLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   const logOut = () => {
      setIsLoading(true)
      return signOut(auth);
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         console.log('Current User :', currentUser)
         setIsLoading(false)
      })
      return () => {
         return unsubscribe()
      }
   },[])

   const authInfo = {
      user,
      createUser,
      login,
      googleSign,
      logOut,
      isLoading
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

AuthProvider.propTypes = {
   children : PropTypes.node,
}

export default AuthProvider;