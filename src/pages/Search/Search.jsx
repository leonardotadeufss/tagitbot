import React, {  useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Header from "../../components/Header";
import Note from "../../components/Note";
import SearchArea from "../../components/SearchArea";
import SkeletonNote from "../../components/SkeletonNote";

function Search(props) {
  
  const [displayTweets, setDisplayTweets] = useState([])
  const tags = props.tags
  const totalPage = props.totalpage 
  const actualPage = props.actualpage
  const tweets = props.tweets
  useEffect( () => {
    setDisplayTweets(tweets)
  }, [tweets])


  // function FilterByTag(e) {
  //   const {value} = e.target;
  //   if (value !== "DEFAULT") {
  //     const newTweets = tweets.filter( (tweet) =>  {
  //       return tweet.tag === value;
  //     })
  //     setDisplayTweets(newTweets);
  //   } else {
  //     setDisplayTweets(tweets)
  //   }

  // }




  return (
    <>
      <Header
        pagename = "Home"
        link = "/"
      />
      <SearchArea 
        loadClick = {props.LoadData}
        tagList = {tags}
        filter = {props.filterByTag}
        totalpage = {totalPage}
        actualpage = {actualPage}
        changePage = {props.changePage}
      />

      {props.displayError? <ErrorMessage/> :
        props.isLoading ? <SkeletonNote /> :
        <div className="Notes">
          {displayTweets.map( (tweet) => {
            return (
              <Note 
                noteclass = "note"
                key = {tweet._id}
                title = {tweet.tweet_author}
                content = {tweet.tweet}
                tag = {tweet.tag}
                tagclass = "tag"
              />
            )
          })}
        </div>
      }
    </>
  );
}

export default Search;
