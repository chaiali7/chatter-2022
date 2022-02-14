import "./App.css";
import TextInput from "./TextInput";
import "./TextInput.css";
import { useState } from "react";
import Message from "./Message";
import React from "react";
import Camera from 'react-snap-pic'
import "./NamePicker.css";
import NamePicker from "./NamePicker";
import { useDB, db } from "./db";

/*function to make our react app*/ 
function App(props) {
  
  // creates constant for show cameras
  const [showCamera, setShowCamera] = useState(false);

  function takePicture() {
    takePicture = (img) => {
      console.log(img)
      setShowCamera(false)
    }
  }

  const messages = useDB();

  // our username
  let [username, setUsername] = useState("");

  // "sendMessage" runs whenver we click the send button
  function sendMessage(text) {
    if (!text.trim()) return;
    // we'll create a new message object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
    };
    db.send(newMessage);
  }

  // every time state changes, React "re-renders"
  // so this console.log will run again
  console.log(messages);

  // I don't know what to do in line 54 to get the name picker to actually show up :(
  // we return the HTML
  return (
    <div
      className="App"
    >
      <header className="header">
        <div className="logo" />
        <span className="title">CHATTER!</span>
        <NamePicker setUsername={setUsername} /> 
      </header>
      <div className="messages">
        {messages.map((msg, i) => {
          // loop over every message in the "messages" array
          // and return a Message component
          // we are "spreading" all the ityfor each item
          return <Message {...msg} key={i} />;
        })}
      </div>
      <TextInput sendMessage={text=> props.onSend(text)} 
        showCamera={()=>setShowCamera(true)}/>
      <div>{showCamera && <Camera takePicture={takePicture} />}</div>
    </div>
  );
}


export default App;