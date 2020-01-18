import React from "react";

import "./cards.css";

function Cards(props) {
    return (
        <div className="cardDiv" onClick={() => props.makeClick(props.id)}>
            <div className={`card ${props.hoverClass}`} onMouseEnter={() => props.hover(props.id)} onMouseLeave={() => props.unhover(props.id)}>
                <img className="card-img-top" src={props.route} picnum={props.id} alt="Card"></img>
            </div>
        </div>
    );
}

export default Cards;
