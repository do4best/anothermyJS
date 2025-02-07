import React from 'react';
import Header from "./header.jsx";
import Bodier from "./bodier.jsx";
import Footer from "./footer.jsx";

function MainLayout(props) {
    return (
        <>
        <Header/>
            <Bodier/>
            <Footer/>

        </>
    );
}

export default MainLayout;