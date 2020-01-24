import React from "react";
import "./wrapper.css";

function Wrapper(props) {
    // props.children is referencing whatever is put within the Wrapper tag on the app level
    return (
        <div className="container">
            <div className="wrapper">
                {props.children}
            </div>
        </div>
    );
}

export default Wrapper;
