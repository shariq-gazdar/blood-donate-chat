import React from "react";
import { auth } from "../firebase";
import deleteIcon from "../assets/delete_svg.svg";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ message, deleteFunc }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
        <p className="text-xs mx-10">
          {new Date(message.timestamp?.toDate()).toLocaleString()}
        </p>
        <img src={deleteIcon} alt="" onClick={deleteFunc} />
      </div>
    </div>
  );
};

export default Message;
