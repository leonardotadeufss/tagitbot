import React, { useState } from "react";
import Search from "../pages/Search/Search";
import Home from "../pages/Home/Home";
import { BrowserRouter , Route, Switch }  from 'react-router-dom';



export default function App() {

    const { REACT_APP_API_URL } = process.env;
    const [tweets, setTweets] = useState([]);
    const [tags, setTags] = useState([])
    const [actualPage, setActualPage] = useState()
    const [totalPage, setTotalPage] = useState()
    const [displayError, setDisplayError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [url, setUrl] = useState()

    async function LoadData(userName, currentPage){
        setLoading(true)
        setUrl(REACT_APP_API_URL+userName)
        try {
              
          const res = await fetch(REACT_APP_API_URL+userName+"/tags");
          if (!res.ok) {
            throw new Error(res.statusText)
          }
          const tagData = await res.json();
          setTags(tagData)
          setDisplayError(false)

          const response = await fetch(`${REACT_APP_API_URL}${userName}?page=${currentPage}`);
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
        setUrl(REACT_APP_API_URL+userName)
      }

      async function FilterByTag(e , currentPage){
        setLoading(true)
        var tag = e.target.value;
        setLoading(true)
        if (tag === 'DEFAULT') {
            tag = "";
        }
        const response = await fetch(`${url}/${tag}?page=${currentPage}`);
        const data = await response.json();
        setTweets(data["docs"]);
        setActualPage(currentPage)
        setTotalPage(data.pages) 
        setLoading(false)
        setUrl(`${url}/${tag}`)
      }

      async function changePage(currentPage){
        setLoading(true)
        const response = await fetch(`${url}?page=${currentPage}`);
        const data = await response.json();
        setTweets(data["docs"]);
        setActualPage(currentPage)
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
                        filterByTag = {FilterByTag}
                        changePage = {changePage}
                    />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>

    )

}