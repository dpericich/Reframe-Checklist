import React from 'react';
import Header from './Header';
import ChecklistItems from './ChecklistItems';
import Reset from './Reset'
import './App.css';
import {tasks} from './tasks'

const reframe = require('./reframe_logo.png')

class App extends React.Component {

    state = []

    initializeStatefromLocalStorage = () => {
        if (localStorage.getItem("checklist")) {
            let checklist = localStorage.getItem("checklist")
            this.setState(JSON.parse(checklist))
        } else {
            console.log("Haha you don't get any storage")
        }
    }

    componentDidMount(){
        this.initializeStatefromLocalStorage()
    }

    render() {
        return(
            <div>
                <img src={reframe} height="100px" alt="reframe logo"/>
                <div style={mainBodyStyle}>
                    <Header />
                    <ChecklistItems />
                    <Reset />
                </div>
            </div>
        )
    }
};

const mainBodyStyle = {
    display : "flex",
    flexDirection : "column",
    justifyContent: "center",
    alignItems: "center"
}

export default App;