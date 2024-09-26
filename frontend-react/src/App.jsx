// // importing landing pages
import React from 'react';
import Home from './landing_pages/Home';
import About from './landing_pages/About';
import Locate from './landing_pages/Locate';
import Predict from './landing_pages/Predict';
import Not_found from './landing_pages/Not_found';
import Sign_up from './landing_pages/Sign_up.jsx';


//importing Components

import Navbar from "./components/Navbar.jsx";

function App(){
    const currentPage = window.location.pathname;

    let Page;
    if(currentPage === '/about'){
        Page = About;
    }
    else if(currentPage === '/Locate'){
        Page = Locate;
    }
    else if(currentPage === '/Predict'){
        Page = Predict;
    }
    else if(currentPage === '/Sign_up'){
        Page = Sign_up;
    }
    else if(currentPage === '/'){
        Page = Home;
    }
    else{
        Page = Not_found;
    }
    return <>
        <Navbar></Navbar>
        <Page />
    </>
}

export default App;