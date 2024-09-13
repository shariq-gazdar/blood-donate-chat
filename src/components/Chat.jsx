import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { db } from "../firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

const style = {
  main: `flex flex-col p-[10px] mb-10`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  // Remove message function to delete specific document by its id
  const removeMessage = async (id) => {
    try {
      await deleteDoc(doc(db, "messages", id)); // Deletes the document by its id
      console.log(`Message with id ${id} deleted`);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              deleteFunc={() => removeMessage(message.id)} // Pass the message id to removeMessage
            />
          ))}
      </main>
      {/* Send Message Component */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </>
  );
};

export default Chat;
