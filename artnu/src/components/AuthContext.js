import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext , useState} from 'react';
  const auth = getAuth();

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [userSignedIn, setUserSignedIn] = useState(false);

  const signUp = (firstName, lastName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        const newUser = { firstName, lastName, email };
        setAuthUser(newUser);
        setUserSignedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = { email };
        setAuthUser(newUser);
        setUserSignedIn(true);
        console.log('success in signing in!')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        console.log('failure')
      });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setAuthUser(null);
      setUserSignedIn(false);
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  };

  const contextValue = { authUser, userSignedIn, signUp, signIn, handleSignOut }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}; 
