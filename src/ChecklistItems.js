import React from 'react';
import {tasks} from './tasks'
import CheckListItem from './CheckListItem';

const ChecklistItems = () => {

    return (
        <section style={checklistItemsStyle}>
            {tasks.map(task => {
                return <CheckListItem description={task.description} title={task.title} id={task.id} />
            })}
        </section>
    )
};

const checklistItemsStyle = {
    display : "flex",
    flexDirection : "column",
}

export default ChecklistItems;