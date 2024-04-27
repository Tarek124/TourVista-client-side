import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
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
  const [theme, setTheme] = useState("light");
  // Theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
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
    theme,
    user,
    toggleTheme,
    createUser,
    createUserWithGoogle,
    createUserWithGithub,
    logIn,
  };
  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
};

export default AuthContext;
