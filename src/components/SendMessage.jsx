import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

let messageAudio;

const style = {
  form: `h-14 w-screen  fixed  flex text-xl  bottom-0 z-10 `,
  input: `w-full text-xl p-3 bg-red-700 text-white outline-none border-none `,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    // Load the audio file when the component mounts
    messageAudio = new Audio("message_sound.wav");
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });

    // Play the audio after the message is sent
    messageAudio
      .play()
      .then(() => console.log("Audio played"))
      .catch((error) => console.error("Audio play failed", error));
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
