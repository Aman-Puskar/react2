import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";  //this will make the things fix and change the context dynamically

function Route() {
    return (
        <>
        <Header />
        
            <Outlet />
                
        <Footer />
        </>
    )
}

export default Route;