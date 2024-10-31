/* eslint-disable react/prop-types */
import { useContext, createContext, useEffect, useState } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import Auth from "../auth/firebase";
import Cookie from "universal-cookie";

const Auther = createContext([]);

const Auth_provider = ({ children }) => {
  const [currentuser, setcurrentuser] = useState({});
  const [loading, setloading] = useState(false);
  const cookie = new Cookie();
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const logout = () => {
    return (
      cookie.remove("user"), signOut(Auth), (window.location.pathname = "/")
    );
  };

  const rest_password = (email) => {
    return sendPasswordResetEmail(Auth, email);
  };

  const update_name = (name) => {
    return updateProfile(Auth.currentUser, { displayName: name });
  };

  const update_profile = (name, url) => {
    return updateProfile(Auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const verificaton_email = () => {
    return sendEmailVerification(Auth.currentUser);
  };

  const upate_email = (email) => {
    return updateEmail(Auth.currentUser, email);
  };

  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      if (user) {
        setcurrentuser(user);
      } else {
        return setcurrentuser(null);
      }
    });
  }, []);
  return (
    <Auther.Provider
      value={{
        signup,
        signin,
        upate_email,
        verificaton_email,
        rest_password,
        currentuser,
        loading,
        setloading,
        update_name,
        logout,
        update_profile,
      }}
    >
      {children}
    </Auther.Provider>
  );
};

export default Auth_provider;

export const Auth_context = () => {
  return useContext(Auther);
};
