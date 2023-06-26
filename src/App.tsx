import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {About} from "./components/About/About";
import {TopBlock} from "./components/TopBlock/TopBlock";
import {Technologies} from "./components/Technologies/Technologies";
import {Experience} from "./components/Experience/Experience";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Calculator} from "./components/Calculator/Calculator";
import {Contact} from "./components/Contact/Contact";

function App() {
    return (
        <div className="App">
            <Header/>
            <TopBlock/>
            <About/>
            <Technologies/>
            <Experience/>
            <Portfolio/>
            <Calculator/>
            <Contact/>
        </div>
    );
}

export default App;
