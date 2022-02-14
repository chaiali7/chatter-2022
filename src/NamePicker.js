import "./NamePicker.css";
import { useState } from "react";
import React from "react";
import {FiEdit} from 'react-icons/fi';

// creates a function name picker that allows users to edit and assign a name
function NamePicker(props) {
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState(''); 

  function ok() {
    props.setUsername(name);
    setEditName(false);
  }
  
  if (editName) {
    return (
      <div className="name-picker">
        <input
          className="name-picker-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button className="name-picker-button" onClick={ok}>
          OK
        </button>
      </div>
    );
  }
  

/*if we want to edit the name and submit it, we will se the edit button*/
  return (
    <div className="name-picker">
      <span className="name-picker-name">{name || "Set Username:"}</span>
      <FiEdit size="24" onClick={() => setEditName(true)} />
    </div>
  );
}
export default NamePicker; 
