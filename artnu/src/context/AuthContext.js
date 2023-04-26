import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";
import { signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// Create a context to store the user's authentication state
const UserContext = createContext();


// A custom hook to consume the UserContext
export const useUser = () => useContext(UserContext);

// A higher-order component that provides the UserContext to its children
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log("user signe din", user)
    })
   

    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, []);

  const signIn = () => {
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    
    auth.signOut();
    console.log("signed out")
    navigate("/ArtNU/signout");
    
    

  };

  // Export the user object and the signIn and signOut functions
  const values = {
    user,
    signIn,
    signOut,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};



