import React from "react";
import "./style.css";

function Wrapper(props) {
    // props.children is referencing whatever is put within the Wrapper tag on the app level
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
