import React, { useState } from "react";
import Search from "../pages/Search/Search";
import Home from "../pages/Home/Home";
import { BrowserRouter , Route, Switch }  from 'react-router-dom';



export default function App() {

    const url = "http://tagit-test.herokuapp.com/"
    const [tweets, setTweets] = useState([]);
    const [tags, setTags] = useState([])
    const [actualPage, setActualPage] = useState()
    const [totalPage, setTotalPage] = useState()
    const [displayError, setDisplayError] = useState(false)
    const [isLoading, setLoading] = useState(false)

    async function LoadData(user, currentPage){
        setLoading(true)
        try {
              
          const res = await fetch(url+user+"/tags");
          if (!res.ok) {
            throw new Error(res.statusText)
          }
          const tagData = await res.json();
          setTags(tagData)
          setDisplayError(false)

          const response = await fetch(`${url}${user}?page=${currentPage}`);
          const data = await response.json();
          setTweets(data["docs"]);
          setActualPage(currentPage)
          setTotalPage(data.pages) 
          
        } catch (err) {
            setActualPage("")
            setTotalPage("")
            setTags("")
            setDisplayError(true)
        }
        setLoading(false)
      }

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/search">
                    <Search
                        tweets = {tweets}
                        tags = {tags}
                        totalpage = {totalPage ? totalPage : ""}
                        actualpage = {actualPage ? actualPage : ""}
                        LoadData = {LoadData}
                        displayError = {displayError}
                        isLoading = {isLoading}
                    />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>

    )

}