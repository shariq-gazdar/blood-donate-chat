import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import React from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import GoogleButton from "react-google-button";
// const [user, setUser] = useState("");

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // The signed-in user info.
      const user = result.user;
      console.log("User signed in: ", user);

      // Save user information to Firestore
      const userRef = doc(db, "users", user.uid); // Create a reference to the users collection

      await setDoc(
        userRef,
        {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          lastLogin: new Date(), // Timestamp of the last login
          createdAt: user.metadata.creationTime, // User's account creation time
        },
        { merge: true }
      ); // Merge in case some fields already exist

      console.log("User info saved to Firestore");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during sign-in:", errorMessage);
    });
};
const signOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
};

function SignIn() {
  const [user] = useAuthState(auth);
  return (
    <div className="mr-10">
      {user ? (
        <button
          onClick={signOutUser}
          className="bg-red-500 text-white p-2 rounded"
        >
          Sign Out
        </button>
      ) : (
        <GoogleButton onClick={googleSignIn} />
      )}
    </div>
  );
}

export default SignIn;
