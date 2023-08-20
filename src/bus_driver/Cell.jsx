import React from "react";
import { PIECES } from "./gamePieces"
import './Cell.css';

function Cell({ type, destination }) {

    return (
        <div className={destination ? "Destination" : "Cell"} style={{
            background: PIECES[type].color,
            border: destination ? '1px solid yellow' : type === 'stop' ? '1px solid red' : ''
        }}></div>
    )
}

export default React.memo(Cell);