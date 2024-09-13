import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";

function SignIn() {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const userRef = doc(db, "users", user.uid);
        console.log(user);

        await setDoc(userRef, {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          lastLogin: new Date(),
        });

        // The signed-in user info.
        const user = result.user;
        console.log("User signed in: ", user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
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
