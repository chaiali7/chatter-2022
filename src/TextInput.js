import "./TextInput.css";
import { useState } from "react";
import React from "react";
import { FiSend, FiCamera } from 'react-icons/fi'

function TextInput(props) {
  const [text, setText] = useState("");

    /*creates a send function that takes in text */
  function send() {
    props.sendMessage(text);
    setText("");
  }
  /*if user presses enter key, message sends*/ 
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  /*returns the message when clicking on the send button in the footer*/ 
  /*changes send icon to be paper plane*/ 
  return (
    <footer className="footer">
      <button onClick={props.showCamera}
        style={{left:10, right:'auto'}}>
        <FiCamera style={{height:15, width:15}} />
      </button>
      <input
        className="text-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <button className="send" onClick={send}>
        <FiSend style = {{height:15, width:15}} />
      </button>
    </footer>
  );
}

export default TextInput;