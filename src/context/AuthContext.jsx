import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const AppContext = createContext(null);

const AuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //create User With Email And Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //create user with google
  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //create user with github
  const createUserWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  //login
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);
  const appData = {
    loading,
    user,
    createUser,
    createUserWithGoogle,
    createUserWithGithub,
    logIn,
    logOut,
  };
  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
};

export default AuthContext;
