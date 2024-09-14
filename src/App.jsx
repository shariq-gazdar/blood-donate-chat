import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Doner from "./components/Doners";
import Donate from "./components/Donate";
import "./index.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  let [user] = useAuthState(auth);
  console.log(user);

  return (
    <BrowserRouter>
      <div className="appContainer ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/chat"
            element={
              user ? (
                <Chat />
              ) : (
                <div className="flex justify-center items-center font-black text-9xl">
                  SigIn First
                </div>
              )
            }
          />
          <Route path="/donate" element={<Donate />} />
          <Route path="/doner" element={<Doner />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
