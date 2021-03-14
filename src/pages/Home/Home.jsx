import React from "react";
import Header from "../../components/Header";
import Note from "../../components/Note";
import Subtitle from "../../components/Subtitle";
import logo from "../../images/logo-tag-it.png";

function Home() {
    return(
        <>
            <Header
                link = "/search"
                pagename="Search"
            />
            <div className="presentation-container">        
                <Subtitle>WELCOME TO</Subtitle>
                <img src={logo} alt="logo tagIt" className="main-logo" />
                <Subtitle>A Twitter bot that helps you to</Subtitle>
                <Subtitle>save and organize Tweets</Subtitle>
            </div>
            <div className="instructions-container">    
                <Note
                noteclass = "note instruction"
                key = {Math.random()}
                title = "Lorem ipsum"
                content = "dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. "
                tag = "01"
                tagclass = "tag step"/>
                <Note
                noteclass = "note instruction"
                key = {Math.random()}
                title = "Lorem ipsum"
                content = "dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. "
                tag = "02"
                tagclass = "tag step"/>
                <Note
                noteclass = "note instruction"
                key = {Math.random()}
                title = "Lorem ipsum"
                content = "dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. "
                tag = "03"
                tagclass = "tag step"/>
            </div>
        </>
    )

}
export default Home;
