import React from "react";
import logo from "../images/logo-tag-it.png";
import Tag from "./Tag";

function Header(props) {
  return (
    <header>
      <img src={logo} alt="logo tagIt" />
      <Tag nameClass="tag headerBtn" link={props.link} >{props.pagename}</Tag>
    </header>
  );
}

export default Header;
