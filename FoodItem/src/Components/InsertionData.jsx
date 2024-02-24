import style from "./InsertionData.module.css";
import React, { useState } from "react";

function InsertionData({ add }) {
  const [text, setText] = useState("");

  const newText = (e)=>{
    setText(e.target.value)
  }

  const upDate = ()=>{
    text == ""? alert("Enter Somthing Please") : add(text);
    setText("");
  }

  return (
    <>
      <div className="inputContainer">
        <input
          className={style.inputorder}
          value={text}
          onChange={newText}
          type="text"
          placeholder="Add Your Order"
        />
        <button onClick={upDate} className={style.addbtn}>
          Add
        </button>
      </div>
    </>
  );
}

export default InsertionData;
