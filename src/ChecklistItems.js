import React from 'react';
import ChecklistItem from './CheckListItem';

const ChecklistItems = () => {
    let addLocalState = () => {
        localStorage.setItem("name", "wouldn't you like to know");
        console.log(localStorage.getItem("name"))
    };

    let removeLocalState = () => {
        localStorage.removeItem("name");
        console.log(localStorage.getItem("name"));
    }

    return (
        <section style={checklistItemsStyle}>
            <button onClick={addLocalState}>Store Stuff</button>
            <button onClick={removeLocalState}>Remove Stuff</button>
        </section>
    )
};

const checklistItemsStyle = {
    display : "flex",
    flexDirection : "column",
}

export default ChecklistItems;