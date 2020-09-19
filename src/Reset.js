import React from 'react';

const Reset = () => {
    return(
        <button style={resetButtonStyle}>Reset</button>
    )
};

const resetButtonStyle = {
    width : "20%",
    height: "50px",
    backgroundColor: "#64E1CB",
    border: "none",
    borderRadius: "5px",
    margin : "20px 0px",
}

export default Reset;