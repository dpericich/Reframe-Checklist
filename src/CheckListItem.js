import React from 'react';

const CheckListItem = ({id, title, description}) => {

    const updateLocalStorage = () => {

    }

    const isChecked = () => {
        const box = document.querySelector(`.${id}`)
        box.checked = (!box.checked)
    }

    return(
        <div className="cl-item" style={listItemStyle} key={id} onClick={isChecked}>
            <input type="checkbox" className={id} style={checkboxStyle} onClick={isChecked}></input>
            <div className="cl-item-text" style={itemTextStyle}>
                <h2 style={{color:"#545454", fontSize: "26px"}}>{title}</h2>
                <p style={{color:"#8e8a8a", fontSize: "17px"}}>{description}</p>
            </div> 
        </div>
    )
};

const listItemStyle = {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    margin : "10px 40px",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    lineHeight: "1.3",
}

const checkboxStyle = {
    marginRight: "50px",
    marginLeft: "100px"
}

const itemTextStyle = {
    wordWrap: true,
}

export default CheckListItem;