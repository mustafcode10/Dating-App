import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import * as Google from "expo-google-app-auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from "firebase/auth";

import { auth } from "./../firebase";

const AuthContext = createContext({});

const config = {
  androidClientId:
    "1036634927114-aie1h7064sbu2cni4s31p22fu0sm9qji.apps.googleusercontent.com",
  iosClientId:
    "1036634927114-1go12bmc0ccivic8neatt10t8qofl6r8.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // login ...
          setUser(user);
        } else {
          // Not Login
          setUser(null);
        }
        setLoadingInitial(false);
      }),
    []
  );
  const logout = () => {
    setLoading(true);
    signOut(auth)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    await Google.logInAsync(config)
      .then(async (logInResult) => {
        if (logInResult.type === "success") {
          // login ..........
          const { idToken, accessToken } = logInResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );
          await signInWithCredential(auth, credential);
        }
        return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const memeoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      signInWithGoogle,
      logout,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memeoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
