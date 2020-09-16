import React from 'react';
import Header from './Header';
import ChecklistItems from './ChecklistItems';
import './App.css';
import {tasks} from './tasks'

const reframe = require('./reframe_logo.png')

const App = () => {
    return(
        <div>
            <img src={reframe} height="100px" alt="reframe logo"/>
            <div style={mainBodyStyle}>
                <Header />
                <ChecklistItems />
            </div>
        </div>
    )
};

const mainBodyStyle = {
    display : "flex",
    flexDirection : "column",
    justifyContent: "center",
    aligmItems: "center"
}

export default App;