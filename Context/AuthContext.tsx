import React, { createContext, useContext, useState } from "react";
import firebase from "firebase";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<firebase.User>(null);

  const signin = async (email: string, password: string) => {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password);
    if (res.user) {
      setUser(res.user);
    }
  };

  const signup = async (email: string, password: string) => {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
    if (res.user) {
      setUser(res.user);
    }
  };

  const signout = async () => {
    return firebase.auth().signOut();
  };

  const getCurrentUser = () => {
    return firebase.auth().currentUser;
  };

  return {
    getCurrentUser,
    signin,
    signup,
    signout,
  };
}
