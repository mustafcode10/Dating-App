import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth"

const AuthContext = createContext({});

const config = {
    androidClientId: '278485296468-55d4cvdil0edsbi39ln6omnu3dudu24s.apps.googleusercontent.com',
    scopes: ["profile", "email" ],
    permissions:["public_profile", "email", "gender", "location"]
}

export const AuthProvider = ({ children }) => {
    const signInWithGoogle = async () =>{
        Google.logInAsync(config).then(async (logInResult) => {
           if(logInResult.type === "success"){
           //...........
           }
        })
    }
  return (
    <AuthContext.Provider
      value={{
        user: null,
        signInWithGoogle: signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
