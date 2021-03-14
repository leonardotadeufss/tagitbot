import React from "react";
import Tag from "./Tag.jsx";

function Note(props) {
  return (
    <div className={props.noteclass}>
      <h1>{props.title}</h1>
      <Tag nameClass={props.tagclass}>
        {props.tag}
      </Tag>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
