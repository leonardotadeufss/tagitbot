import React, { useState } from "react";
import DropFilter from "./DropFilter.jsx";
import Title from "./Title.jsx";
import PageController from "./PageController"

function SearchArea(props) {
  const [user, setUser] = useState("");
  var tags = [];
  
 if (props.tagList.length) {
   tags = props.tagList.map((tag)=> tag.tag)
 }
 

  function handleChange(e){
    const {value} = e.target;
    setUser(value.toLowerCase())
  }


  return (
    <div className="search-area">
      <Title>Saved Tweets</Title>
      <form autoComplete="off">
        <button
          onClick= {(e) => {
            e.preventDefault();
            props.loadClick(user, 1)
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            >
            <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
          </svg>
        </button>
        <input 
          name="user"
          className="user"
          value = {user}
          placeholder="Search" 
          onChange = {handleChange}
        />
      </form>
      <PageController pagerequest={props.changePage} totalpage = {props.totalpage} actualpage = {props.actualpage}/>
      <DropFilter filter={props.filter} name = "Tag" options={tags}>Tag</DropFilter>
    </div>
  );
}

export default SearchArea;
