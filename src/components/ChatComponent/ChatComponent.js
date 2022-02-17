import React from "react";
import "./ChatComponent.css";
import store from "../../index";
import { useSelector } from "react-redux";

const ChatComponent = () => {
  let messages = useSelector((state) => state.messages);

  const clickHandler = (id)=>{
    store.dispatch({type: "REMOVE_NEW_MESSAGE", payload: {id}})
  }

  return (
    <div className="chatComponent">
      {messages.map((item) => {
        return (
          <div className="line">
            <div className="message" onClick={() => clickHandler(item.id)}>
              <div className="messageText">{item.text}</div>
              <div className="messageTime">{item.currentDate}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatComponent;
