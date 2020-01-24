import React from "react";

import "./jumbotron.css";

function Jumbotron(props) {
    return (

        <div className="jumbotron jumbotron-fluid">
            <h1 className=""><strong>Clicky Game!</strong> </h1>
            <h3 className="">Powered by Create-React-App</h3>
            <p className="lead">Points Scored: {props.pointsScored}</p>
            <p>High Score: {props.highScore}</p>
            {/* {
            // this is why .map() works- the way an array is rendered is quite simple, it's just all of the array values
            [1, 2, 3, 4, 5]
          } */}

        </div>
    );
}

export default Jumbotron;







