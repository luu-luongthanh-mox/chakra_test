import { ChakraProvider } from "@chakra-ui/react";
import firebase from "firebase";
import React from "react";
import { AuthProvider } from "Context/AuthContext";
import { Header } from "components/Header";

import "../styles/globals.css";
// Configure Firebase.
const config = {
  apiKey: "AIzaSyBdZTzv4wXQ33UWpw32xtKlM7tiDmqXFow",
  authDomain: "manga-firestore.firebaseapp.com",
  projectId: "manga-firestore",
  // ...
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
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
