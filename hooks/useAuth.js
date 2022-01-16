import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth"

const AuthContext = createContext({});

const config = {
    androidClientId: '1036634927114-v4tc5q5f0bspqjqhu9tql7vb3ceb763j.apps.googleusercontent.com',
    iosClientId: '1036634927114-1go12bmc0ccivic8neatt10t8qofl6r8.apps.googleusercontent.com',
    scopes: ["profile", "email" ],
    permissions:["public_profile", "email", "gender", "location"]
}

export const AuthProvider = ({ children }) => {
    const signInWithGoogle = async () =>{
      console.log('GOOGLE', Google)
        console.log('CONFIG', config)
        Google.logInAsync(config).then(async (logInResult) => {
           if(logInResult.type === "success"){
           console.log(logInResult)
           }
        })
    }

 

  return (
    <AuthContext.Provider
      value={{
        user: null,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
