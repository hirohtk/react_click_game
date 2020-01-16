import React from "react";

import "./cards.css";

function Cards(props) {
    return (
        <div className="cardDiv">
            <div className="card">
                <img className="card-img-top" src={props.route} alt="Card"></img>
            </div>
        </div>
    );
}

export default Cards;
