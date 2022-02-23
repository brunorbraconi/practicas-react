import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";

function ContentWrapper(){
    return (
        <React.Fragment>
            <div id="content-wrapper" class="d-flex flex-column"> 
            <TopBar/>
            <ContentRowTop/>
            <Footer/>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;