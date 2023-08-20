import Cell from "./Cell";
import './Stage.css';

export default function Stage({ stage, passengers, gameOver }) {

    const checkDestinations = ({ x, y }) => {
        return passengers.some(passenger => passenger.destination.x === x && passenger.destination.y === y);
    }

    return (
        <div className="Stage" style={{
            gridTemplateRows: `repeat(${stage.length}, calc(30vw / ${stage.length}))`,
            gridTemplateColumns: `repeat(${stage.length}, calc(30vw / ${stage.length}))`,
            opacity: gameOver ? '50%' : '100%'
        }}>
            {stage.map((row, y) => row.map((cell, x) => <Cell key={x} type={cell[0]} destination={checkDestinations({ x, y })} />))}
        </div>
    )
}