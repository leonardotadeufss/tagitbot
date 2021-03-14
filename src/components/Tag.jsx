import React from "react";

export default function Tag(props) {
  return (
    <a className={props.nameClass} href={props.link}>
      {props.children}
    </a>
  );
}
