import React from "react";
import SignIn from "./SignIn";
import "../index.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

function Navbar() {
  const [user] = useAuthState(auth); // Get user object

  return (
    <nav className="bg-red-700 text-white flex justify-between items-center">
      <h1 className="p-5 text-3xl">Blood Donation App</h1>
      {user ? (
        <>
          <div className="flex items-center">
            <p className="mr-5">
              Welcome, {user.displayName || user.email}
              <img
                src={user.photoURL}
                alt=""
                className="inline rounded-full w-10 border border-white"
              />
            </p>
            <ul className="flex space-x-6 justify-center">
              <li>
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chat" className="hover:text-gray-200">
                  Chat
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <SignIn />
        </>
      ) : (
        <SignIn />
      )}
    </nav>
  );
}

export default Navbar;
