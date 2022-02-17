import React, { useState } from "react";
import "./InputComponent.css";
import store from "../../index";
import { useSelector } from "react-redux";

const InputComponent = () => {
  useSelector((state) => console.log(state));
  const [text, setText] = useState();

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let date = new Date();
      let currentDate = date.getHours() + ":" + date.getMinutes();
      store.dispatch({
        type: "ADD_NEW_MESSAGE",
        payload: { text, currentDate },
      });
      setText("");
    }
  };

  const handleClick = ()=>{
    let date = new Date();
    let currentDate = date.getHours() + ":" + date.getMinutes();
    store.dispatch({
      type: "ADD_NEW_MESSAGE",
      payload: { text, currentDate },
    });
    setText("");
  }
  
  return (
    <div className="inputWrapper">
      <input
        className="inputComponent"
        onKeyDown={handleKeyDown}
        onChange={onChangeHandler}
        value={text}
      />
      <div className="sendButton" onClick={handleClick}></div>
    </div>
  );
};

export default InputComponent;
