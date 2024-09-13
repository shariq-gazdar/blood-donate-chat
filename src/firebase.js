// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC9MFMgagR5cMbJ0oDK0CDDrKPNl6eWEc8",
//   authDomain: "chat-app-4ad13.firebaseapp.com",
//   projectId: "chat-app-4ad13",
//   storageBucket: "chat-app-4ad13.appspot.com",
//   messagingSenderId: "1032880718463",
//   appId: "1:1032880718463:web:f8270dc4d9373f3a17754a",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9MFMgagR5cMbJ0oDK0CDDrKPNl6eWEc8",
  authDomain: "chat-app-4ad13.firebaseapp.com",
  projectId: "chat-app-4ad13",
  storageBucket: "chat-app-4ad13.appspot.com",
  messagingSenderId: "1032880718463",
  appId: "1:1032880718463:web:f8270dc4d9373f3a17754a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
