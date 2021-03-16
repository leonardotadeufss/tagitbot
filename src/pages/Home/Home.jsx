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
                title = "Tag"
                content = "Reply the tweet to be saved mentioning the @tagitbot followed by a categorizing keyword."
                tag = "01"
                tagclass = "tag step"/>
                <Note
                noteclass = "note instruction"
                key = {Math.random()}
                title = "Confirm"
                content = "Wait the bot reply your mention with the confirmation of success and a link to view your saved tweets"
                tag = "02"
                tagclass = "tag step"/>
                <Note
                noteclass = "note instruction"
                key = {Math.random()}
                title = "Be happy"
                content = "Enjoy your saved and organized tweets. It's really that simple."
                tag = "03"
                tagclass = "tag step"/>
            </div>
        </>
    )

}
export default Home;
