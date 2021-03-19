import { ChakraProvider } from "@chakra-ui/react";
import firebase from "firebase";
import React from "react";
import { AuthProvider } from "Context/AuthContext";
import { Header } from "components/Header";

import "../styles/globals.css";
// Configure Firebase.
const config = {
  apiKey: "AIzaSyCIjkMO2yjYGsItTwdEuX5R_6OwLOMssIk",
  authDomain: "manga-water.firebaseapp.com",
  projectId: "manga-water",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

console.log(firebase);
const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
